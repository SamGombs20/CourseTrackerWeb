import type { Dispatch } from "react";
export type AppStateContextProps = {
    courses: Course[];
    selectedCourse: Course | null;
    setSelectedCourse: (course: Course | null) => void;
    openCourseModal: boolean;
    setOpenCourseModal: (open: boolean) => void
    dispatch: Dispatch<Action>;
}

export type Action = { type: "ADD_COURSE", payload: Course } | { type: "UPDATE_COURSE", payload: Course }
    | { type: "DELETE_COURSE", payload: Course } | {type:"EDIT_COURSE", payload:Course};