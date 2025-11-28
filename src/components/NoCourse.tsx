import {  motion } from "motion/react";

import "./NoCourse.css"

export const NoCourse =()=>{
    return (
        <div className="main">
            <motion.img
            src="/no-results.svg"
            alt="no results"
            initial ={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            style={{width:"200px"}}
            transition={{duration:1}}
            />
            <p className="title-text" style={{marginTop:"2rem"}}>No courses yet</p>
        </div>
    );
}