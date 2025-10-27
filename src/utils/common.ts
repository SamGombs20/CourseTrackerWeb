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
export const addCourse = (course:Course):Action => ({
    type:"ADD_COURSE",
    payload:course
})