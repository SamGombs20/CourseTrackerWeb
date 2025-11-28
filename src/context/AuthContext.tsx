import { createContext, useEffect, useState, type ReactNode } from "react";
import { authenticatedUser, loginUser } from "../api/auth";

export const AuthContext = createContext<AuthContext>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken]= useState(localStorage.getItem("accessToken"));
    const [user, setUser] = useState(null)

    useEffect(()=>{
        if(!token) return;
        const fetchUser = async()=>{
            try{
                const data = await authenticatedUser(token)
                setUser(data)
            }
            catch(err){
                console.error("Failed to load user:", err)
            }
        };
        fetchUser();
    },[token])

    const login = async(username:string, password:string)=>{
        const data = await loginUser(username, password);
        setToken(data.accessToken)
        
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)

        const userRequest = await authenticatedUser(data.accessToken)

        setUser(userRequest)

    };
    const logout =()=>{
        setToken(null)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
    }
    return (
        <AuthContext.Provider value={{user,token,login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}