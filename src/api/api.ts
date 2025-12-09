
const apiUrl = import.meta.env.VITE_API_URL;
const authUrl = import.meta.env.VITE_AUTH_ENDPOINT
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
// export const load = async ():Promise<AppState>=>{
//     const res = await fetch(`${apiUrl+authUrl}/courses`,{
//         headers:{
//             "Authorization":
//         }
//     })
//     if(!res.ok){
//         throw new Error("Error loading data")
//     }
//     const courses = await res.json()
//     return {courses}
// }
export const createUser = async(user:User)=>{
    return fetch(`${apiUrl+authUrl}/auth/register`,{
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
export const getCourses = async(accessToken:string)=>{
    const res = await fetch(`${apiUrl+authUrl}/me/courses`,{
        headers:{
            "Authorization":`Bearer ${accessToken}`
        }
    })
    if(!res.ok){
        throw new Error("Error fetching courses")
    }
    return await res.json()
}
export const addCourseAPI = async(course:Course)=>{
    const res = await fetch(`${apiUrl+authUrl}/me/addCourse`, {
        method:"POST",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(course)
    })
    if(!res.ok){
        throw new Error("Error adding course")
    }
    
    return await res.json()
}
export const updateCourse = async(course:Course)=>{
    const res = await fetch(`${apiUrl+authUrl}/me/updateCourse/${course.id}`,{
        method:"PUT",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(course)
    })
    if(!res.ok){
        throw new Error("Error updating course")
    }
    return await res.json()
}
export const deleteCourseAPI = async(courseId:string)=>{
    const res = await fetch(`${apiUrl+authUrl}/me/deleteCourse/${courseId}`,{
        method:"DELETE",
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
        }
        
    })
    if(!res.ok){
        throw new Error("Error deleting course")
    }
    return
}
