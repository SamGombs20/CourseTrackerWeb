import type { Dispatch } from "react";
export type AppStateContextProps ={
    courses:Course[];
    selectedCourse:Course|null;
    setSelectedCourse:(course:Course)=>void;
    openCourseModal:boolean;
    setOpenCourseModal:(open:boolean)=>void
    dispatch:Dispatch<Action>;
}

type Action = {type:"ADD_COURSE", payload:Course} | {type:"UPDATE_COURSE", payload:Course} | {type:"DELETE_COURSE", payload:string};