

type Course ={
    id:string;
    name:string;
    category:string;
    description:string;
    status:"Not Started" | "In Progress" | "Completed"|"";
    startDate?:string;
    endDate?:string;
    rating?:string;
}
type AppState = {
    courses:Course[];
}
type AddCourseProps ={
    open:boolean;
    handleClose:()=>void;
}
type TableProps ={
    data:Course[];
}
import type { Dispatch } from "react";
type AppStateContextProps ={
    courses:Course[];
    dispatch:Dispatch<Action>;
}

type Action = {type:"ADD_COURSE", payload:Course} | {type:"UPDATE_COURSE", payload:Course} | {type:"DELETE_COURSE", payload:string};