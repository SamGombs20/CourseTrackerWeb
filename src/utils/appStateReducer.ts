import type { Action } from "../types/state";


export const appStateReducer = (draft:AppState, action:Action):AppState|void=>{
    switch(action.type){
        case "ADD_COURSE":
            draft.courses.push(action.payload);
            break;
        case "EDIT_COURSE":
            const index = draft.courses.findIndex((course)=>course.id ===action.payload.id)
            if(index!==-1){
                draft.courses[index] = action.payload
            }
            break;
        case "DELETE_COURSE":
            draft.courses = draft.courses.filter((course)=>course.id !== action.payload.id)
            break;
        case "SET_COURSES":
            draft.courses = action.payload
            break;
        default:
            break;
    }
}