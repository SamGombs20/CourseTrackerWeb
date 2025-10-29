import { createContext, useContext, useState, type FC, type PropsWithChildren } from "react"
import { useImmerReducer } from "use-immer";
import { appStateReducer } from "../utils/appStateReducer";
import type { AppStateContextProps } from "../types/state";

const appData: AppState = {
    courses: [
        { id: "", name: "React for Beginners", category: "Web Development", rating: "4.5", description: "Learn the basics of React.js and build dynamic web applications.", status: "In Progress" },
        { id: "", name: "Advanced Python", category: "Programming", rating: "4.8", description: "Deep dive into advanced Python concepts and libraries.", status: "Not Started" },
        { id: "", name: "Data Science with R", category: "Data Science", rating: "4.2", description: "Explore data analysis and visualization using R programming.", status: "Completed" },
        { id: "", name: "Machine Learning 101", category: "Artificial Intelligence", rating: "4.7", description: "Introduction to machine learning algorithms and applications.", status: "In Progress" },

    ]
}
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const courses = state.courses;
    const [selectedCourse, setSelectedCourseState] = useState<Course | null>(null)
    const [openCourseModal, setOpenCourseModalState] = useState<boolean>(false)
    const setSelectedCourse = (course: Course | null) => {
        setSelectedCourseState(course)
    }
    const setOpenCourseModal = (open: boolean) => {
        setOpenCourseModalState(open)
    }
    
    return (
        <AppStateContext.Provider value={{ courses, dispatch, selectedCourse, setSelectedCourse, openCourseModal, setOpenCourseModal }}>
            {children}
        </AppStateContext.Provider>
    )
}
export const useAppState = () => {
    return useContext(AppStateContext)
}