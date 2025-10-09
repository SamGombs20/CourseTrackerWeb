import TextField from "@mui/material/TextField"
import { textFieldStyles } from "../styles/MUICustom"

const AddCourseModal =()=>{
    return (
        <div className="course-form-container">
                <p className="title-text form-title">Add Course</p>
                <form action="" className="course-form">
                    <TextField label="Course name" sx={textFieldStyles} />
                    <TextField label="Category" sx={textFieldStyles} />
                    <TextField label="Description" sx={textFieldStyles} multiline rows={3} />
                    <TextField label="Status" sx={textFieldStyles} />
                    <TextField label="Start Date" sx={textFieldStyles} type="date" slotProps={{
                        inputLabel: { shrink: true }
                    }} />
                    <TextField label="End Date" sx={textFieldStyles} type="date" slotProps={{
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