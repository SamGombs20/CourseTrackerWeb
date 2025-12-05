import { createContext, useEffect, useState, type ReactNode } from "react";
import { authenticatedUser, loginUser, refreshAccessToken } from "../api/auth";
import { createUser } from "../api/api";
import { nanoid } from "nanoid";

export const AuthContext = createContext<AuthContext>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const [user, setUser] = useState<User|null>(null)

    // 1. Restore token from storage on mount
useEffect(() => {
    const t = localStorage.getItem("accessToken");
    if (t) setToken(t);
}, []);

// 2. Auto-refresh when needed
useEffect(() => {
    if (token) return;
    const rt = localStorage.getItem("refreshToken");
    if (!rt) return;

    refreshAccessToken(rt)
        .then(result => {
            setToken(result.access_token);
            localStorage.setItem("accessToken", result.access_token);
            if (result.refresh_token) {
                localStorage.setItem("refreshToken", result.refresh_token);
            }
        })
        .catch(() => {
            localStorage.clear();
            setToken(null);
            setUser(null);
        });
}, [token]);

// 3. Load user when token exists
useEffect(() => {
    if (!token) {
        setUser(null);
        return;
    }
    authenticatedUser(token)
        .then(setUser)
        .catch(err => {
            if (err?.response?.status === 401) {
                setToken(null); // triggers refresh attempt
            }
        });
}, [token]);

    const login = async (username: string, password: string) => {
        const data = await loginUser(username, password);
        setToken(data.access_token)

        localStorage.setItem("accessToken", data.access_token)
        localStorage.setItem("refreshToken", data.refresh_token)

        const userRequest = await authenticatedUser(data.access_token)

        setUser(userRequest)

    };
    const signUp = async (inputs: SignUp) => {
        const user: User = {
            id: nanoid(),
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            username: inputs.username,
            password: inputs.password
        }
        const data = await createUser(user)
        login(data.username, user.password)
    }
    const logout = () => {
        setToken(null)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
    }
    console.log("AuthContext user:", user)
    return (
        <AuthContext.Provider value={{ user, token, login, logout, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}