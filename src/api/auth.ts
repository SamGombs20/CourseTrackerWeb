import { nanoid } from "nanoid"
import { createUser } from "./api"

export const loginUser = async (username:string, password:string)=>{
    const res = await fetch('https://dummyjson.com/user/login',{
        method:"POST",
        headers:{
            
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:username,
            password:password,
            expiresInMins:30
        })
    })
    
    const data = await res.json()
    if (!res.ok) throw new Error(data.mesage || "Login failed")
    console.log(data)
    return data
}
export const authenticatedUser = async(token:string)=>{
    const res = await fetch("https://dummyjson.com/user/me",{
        method:"GET",
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    if(!res.ok){
        throw new Error("Failed to load authenticated user!")
    }
    return await res.json()
}
export const registerUser = async(inputs:SignUp)=>{
    const user:User = {
        id:nanoid(),
        firstName:inputs.firstName,
        lastName:inputs.lastName,
        username:inputs.username,
        password:inputs.password
    }
    const res = await createUser(user)
    console.log(res)
    return res
}