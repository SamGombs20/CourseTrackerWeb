import { MdAddBox } from "react-icons/md";
import CourseTable from "../components/CourseTable";
import "./MainPage.css"
const MainPage =()=>{
    return (
        <div className="main-page-container">
            <p className="greeting-text">Hello, <span className="name">John</span></p>
            <div className="table-header">
                <p className="table-title">Your courses</p>
                <MdAddBox className="add-btn"/>
            </div>
            <CourseTable/> 
        </div>
    );
}
export default MainPage;