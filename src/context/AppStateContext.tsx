import { createContext, useContext, type FC, type PropsWithChildren } from "react"

const appData:AppState ={
    courses:[]
}
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider:FC<PropsWithChildren<{}>> = ({children})=>{
    const {courses} = appData
    return(
        <AppStateContext.Provider value={{courses}}>
            {children}
        </AppStateContext.Provider>
    )
}
export const useAppState =()=>{
    return useContext(AppStateContext)
}