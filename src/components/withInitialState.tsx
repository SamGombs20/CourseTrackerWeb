import { useEffect, useState, type ComponentType } from "react"
import { load } from "../api/api"

type InjectedProps = {
    initialState:AppState
}
type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>
export function withInitialState<TProps>(WrappedComponent:ComponentType<PropsWithoutInjected<TProps> & InjectedProps>){
    return (props:PropsWithoutInjected<TProps>)=>{
        const [initialState, setInitialState] = useState<AppState>({
            courses:[]
        })
        const [isLoading, setIsLoading] = useState(true)

        const [error, setError] = useState<Error |undefined>()
        useEffect(()=>{
            const fetchInitialState = async()=>{
                try{
                    const data = await load()
                    
                    setInitialState(data)
                }
                catch(e){
                    setError(e as Error)
                }
                setIsLoading(false)
            }
            fetchInitialState()
        },[])
        if(isLoading){
            return <div>Loading...</div>
        }
        if(error){
            return <div>Error: {error.message}</div>
        }
        return (
            <WrappedComponent {...props as TProps} initialState={initialState} />
        )
    }
}