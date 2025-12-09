import { createContext, useContext,  useState,  type ReactNode } from "react"
import { useImmerReducer } from "use-immer";
import { appStateReducer } from "../utils/appStateReducer";
import type { AppStateContextProps } from "../types/state";
import  { withInitialState } from "../components/withInitialState";
import { getCourses } from "../api/api";

type AppStateProviderProps = {
    children:ReactNode
    initialState:AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider = withInitialState<AppStateProviderProps>(
    ({children, initialState})=>{
        const [state, dispatch] = useImmerReducer(appStateReducer, initialState)
        const courses = state.courses;
        const [selectedCourse, setSelectedCourseState] = useState<Course | null>(null)
        const [openCourseModal, setOpenCourseModalState] = useState<boolean>(false)
        const setSelectedCourse = (course: Course | null) => {
            setSelectedCourseState(course)
        }
        const setOpenCourseModal = (open: boolean) => {
            setOpenCourseModalState(open)
        }
        const reloadCourses = async ()=>{
            const token = localStorage.getItem("accessToken")
            if(!token) return;
            try{
                const data =  await getCourses(token)
                dispatch({type:"SET_COURSES", payload:data})
            }
            catch(err){
                console.error("Failed to reload courses:", err)
            }
        }
        
        return (
            <AppStateContext.Provider value={{ courses, dispatch, selectedCourse, setSelectedCourse, openCourseModal, setOpenCourseModal, reloadCourses }}>
                {children}
            </AppStateContext.Provider>
        )
    }
)

export const useAppState = () => {
    return useContext(AppStateContext)
}