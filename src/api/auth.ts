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