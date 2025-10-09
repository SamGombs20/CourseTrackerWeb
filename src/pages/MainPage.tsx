import { MdAddBox } from "react-icons/md";
import CourseTable from "../components/CourseTable";
import "./MainPage.css";
import AddCourseModal from "../components/AddCourseModal";
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
            <AddCourseModal/>
        </div>
    );
}
export default MainPage;