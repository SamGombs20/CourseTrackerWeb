import { createContext, useEffect, useState, type ReactNode } from "react";
import { authenticatedUser, loginUser } from "../api/auth";
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

// 3. Load user when token exists
useEffect(() => {
    if (!token) {
        setUser(null);
        return;
    }
    let isCurrent = true
    authenticatedUser(token)
        .then((user)=>{
            if (isCurrent) setUser(user)
        })
        .catch(err => {
            if (isCurrent) {
                console.warn("Auth failed", err.message)
                setToken(null); // triggers refresh attempt
            }
        });
    return ()=>{
        isCurrent = false
    }
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
    return (
        <AuthContext.Provider value={{ user, token, login, logout, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}