import { createContext, useEffect, useState, type ReactNode } from "react";
import { authenticatedUser, loginUser, refreshAccessToken } from "../api/auth";
import { createUser } from "../api/api";
import { nanoid } from "nanoid";

export const AuthContext = createContext<AuthContext>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const [user, setUser] = useState<User|null>(null)

    useEffect(() => {
        if (!token) return;
        const fetchUser = async () => {
            try {
                const data = await authenticatedUser(token)
                setUser(data)
            }
            catch (err) {
                console.error("Failed to load user:", err)
            }
        };
        fetchUser();
    }, [token])
    useEffect(() => {
        const refreshToken = localStorage.getItem("refreshToken")
        if(!token && refreshToken){
            const refreshUser = async () => {
                const result = await refreshAccessToken(refreshToken)

                setToken(result.access_token)
                localStorage.setItem("accessToken", result.access_token)
                localStorage.setItem("refreshToken", result.refresh_token)
            };
            refreshUser();
        }
    },[])

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