import { Outlet } from "react-router-dom";
import  NavBar from "./NavBar";
import { useAuth } from "../hooks/useAuth";
import { useAppState } from "../context/AppStateContext";
import { useEffect, useRef } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
const authUrl = import.meta.env.VITE_AUTH_ENDPOINT;

const Layout =()=>{
    const {token} = useAuth()
    const {dispatch} = useAppState()
    const hasLoaded = useRef(false)


    useEffect(()=>{
        if(!token){
            dispatch({type:"SET_COURSES", payload:[]})
            hasLoaded.current = false
            return
        }
        if (hasLoaded.current) return
        const fetchCourses = async()=>{
            try{
                const res = await fetch(`${apiUrl+authUrl}/me/courses`,{
                    headers:{
                        "Authorization":`Bearer ${token}`
                    }
                })
                if(res.ok){
                    const courses = await res.json()
                    dispatch({type:"SET_COURSES", payload:courses})
                    hasLoaded.current = true
                }
               
            }
            catch(err){
                console.error("Failed to load courses:", err)
            }
        } 
        fetchCourses()
    }, [token, dispatch])
    return (
        <div>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}
export default Layout;