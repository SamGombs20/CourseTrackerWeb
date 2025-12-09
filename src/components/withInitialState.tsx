import {  type ComponentType } from "react"

type InjectedProps = {
    initialState:AppState
}
type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>
export function withInitialState<TProps>(WrappedComponent:ComponentType<PropsWithoutInjected<TProps> & InjectedProps>){
    return (props:PropsWithoutInjected<TProps> & {initialState:AppState})=>{
       
        return (
            <WrappedComponent {...props as TProps} initialState={props.initialState ?? {courses:[]}} />
        )
    }
}