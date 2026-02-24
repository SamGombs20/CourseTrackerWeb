import Lottie from 'lottie-react'
import loadingAnime from "../assets/loading.json"
export const Loading =()=>{
    return (
        <div>
            <Lottie animationData={loadingAnime} loop={true} style={{height:"100px"}}/>
        </div>
    )
}