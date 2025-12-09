
const apiUrl = import.meta.env.VITE_API_URL;
const authUrl = import.meta.env.VITE_AUTH_ENDPOINT;
export const loginUser = async (username:string, password:string)=>{
    const body = new URLSearchParams();
    body.append("username", username);
    body.append("password", password);
    const res = await fetch(`${apiUrl+authUrl}/auth/login`,{
        method:"POST",
        headers:{
            
            "Content-Type":"application/x-www-form-urlencoded"
        },
        body:body.toString()
    })
    
    const data = await res.json()
    if (!res.ok) throw new Error(data.mesage || "Login failed")
    return data
}
export const authenticatedUser = async(token:string)=>{
    const res = await fetch(`${apiUrl+authUrl}/users/me`,{
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
export const refreshAccessToken = async(refreshToken:string)=>{
    const res =await fetch(`${apiUrl+authUrl}/auth/refresh`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(refreshToken)
    })
    if(!res.ok){
        throw new Error("Failed to refresh access token")
    }
    return await res.json()
}
// export const registerUser = async(inputs:SignUp)=>{
//     const user:User = {
//         id:nanoid(),
//         firstName:inputs.firstName,
//         lastName:inputs.lastName,
//         username:inputs.username,
//         password:inputs.password
//     }
//     const res = await createUser(user)
//     console.log(res)
//     return res
// }