const apiUrl = import.meta.env.VITE_API_URL;
export const save = (payload:AppState)=>{
    return fetch(
        `${apiUrl}/save`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(payload),
        }
    )
    .then((res)=>{
        if(res.ok){
            return res.json()
        }
        else{
            throw new Error("Error saving data")
        }
    })
}
export const load = ()=>{
    return fetch(`${apiUrl}/load`).then(
        (res)=>{
            if(res.ok){
                return res.json()
            }
            else{
                throw new Error("Error loading data")
            }
        }
    )
}
export const createUser = async(user:User)=>{
    return fetch(`${apiUrl}/addUser`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then((res)=>{
        if(res.ok){
            return res.json()
        }
        else{
            throw new Error("Error creating user")
        }
    })
}
