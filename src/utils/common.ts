import type { Action } from "../types/state";

export const getTitle = (index: number) => {
    switch (index) {
        case 0:
            return "All Courses";
        case 1:
            return "Completed";
        case 2:
            return "In Progress";
        case 3:
            return "Not Started";
        default:
            return "All Courses";
    }
}
export const addCourse = (course: Course): Action => ({
    type: "ADD_COURSE",
    payload: course
})
export const editCourse = (updatedCourse: Course): Action => ({
    type: "EDIT_COURSE",
    payload: updatedCourse
})
export const deleteCourse = (course: Course): Action => ({
    type: "DELETE_COURSE",
    payload: course
})
export const validateUsername = (username: string): string => {
    if (!username) {
        return "Username is required";
    } else if (username.length < 4) {
        return "Username must be at least 4 characters long";
    }
    return "";
}
export const validatePassword = (password:string): string =>{
    if(!password){
        return "Passsword is required"
    }
    else if(password.length <8){
        return "Password must be at least 8 characters long"
    }
    return ""
}