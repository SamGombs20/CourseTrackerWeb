import { MdAddBox } from "react-icons/md";
import CourseTable from "../components/CourseTable";
import "./MainPage.css";
import AddCourseModal from "../components/AddCourseModal";
import { useState } from "react";
const MainPage = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div className="main-page-container">
            <p className="greeting-text">Hello, <span className="name">John</span></p>
            <div className="table-header">
                <p className="table-title">Your courses</p>
                <MdAddBox className="add-btn" onClick={handleOpen} />
            </div>
            <CourseTable />
            <AddCourseModal open={open} handleClose={handleClose}/>
        </div>
    );
}
export default MainPage;