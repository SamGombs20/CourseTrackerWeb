import type { Action } from "../types/state";


export const appStateReducer = (draft:AppState, action:Action):AppState|void=>{
    switch(action.type){
        case "ADD_COURSE":
            draft.courses.push(action.payload);
            break;
        default:
            break;
    }
}