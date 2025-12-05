
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
export const load = async ():Promise<AppState>=>{
    const res = await fetch(`${apiUrl}/courses`)
    if(!res.ok){
        throw new Error("Error loading data")
    }
    const courses = await res.json()
    return {courses}
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
export const addCourseAPI = async(course:Course)=>{
    const res = await fetch(`${apiUrl}/addCourse`, {
        method:"POST",
        headers:{
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
    const res = await fetch(`${apiUrl}/updateCourse/${course.id}`,{
        method:"PUT",
        headers:{
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
    const res = await fetch(`${apiUrl}/deleteCourse/${courseId}`,{
        method:"DELETE",
        
    })
    if(!res.ok){
        throw new Error("Error deleting course")
    }
    return
}
