import { MdAddBox } from "react-icons/md";
import CourseTable from "../components/CourseTable";
import "./MainPage.css"
import { TextField } from "@mui/material";
import { textFieldStyles } from "../styles/MUICustom";
const MainPage = () => {
    const onAddCourse = () => {
        console.log("Add course clicked");
    }
    return (
        <div className="main-page-container">
            <p className="greeting-text">Hello, <span className="name">John</span></p>
            <div className="table-header">
                <p className="table-title">Your courses</p>
                <MdAddBox className="add-btn" onClick={onAddCourse} />
            </div>
            <CourseTable />
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
        </div>
    );
}
export default MainPage;