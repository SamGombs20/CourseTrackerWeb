import TextField from "@mui/material/TextField"
import { textFieldStyles } from "../styles/MUICustom"
import { useState } from "react";

const AddCourseModal =()=>{
    const [course, setCourse] = useState<Course>({
        id: '',
        name: '',
        category: '',
        description: '',
        status: '',
        startDate: '',
        endDate: '',
        rating: undefined,
    })
    const handleChange =(e:any)=>{
        const {name, value} = e.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
    }
    return (
        <div className="course-form-container">
                <p className="title-text form-title">Add Course</p>
                <form action="" className="course-form">
                    <TextField label="Course name" name="name" value={course.name} sx={textFieldStyles} onChange={handleChange}/>
                    <TextField label="Category" name="category" sx={textFieldStyles} value={course.name} onChange={handleChange}/>
                    <TextField label="Description" name="description" sx={textFieldStyles} multiline rows={3} onChange={handleChange}/>
                    <TextField label="Status" name="status" value={course.status} sx={textFieldStyles} onChange={handleChange}/>
                    <TextField label="Start Date" name="startDate" value={course.startDate} onChange={handleChange} sx={textFieldStyles} type="date" slotProps={{
                        inputLabel: { shrink: true }
                    }} />
                    <TextField label="End Date" name="endDate" sx={textFieldStyles} type="date" value={course.endDate} onChange={handleChange} slotProps={{
                        inputLabel: { shrink: true }
                    }} />
                    <div className="form-buttons">
                        <button>Cancel</button>
                        <button>Add</button>
                    </div>
                </form>
            </div>
    )
}
export default AddCourseModal;