import CourseTable from "../components/CourseTable";
import "./MainPage.css"
const MainPage =()=>{
    return (
        <div className="main-page-container">
            <p className="greeting-text">Hello <span className="name">John</span></p>
            <p className="table-title">Your courses</p>
            <CourseTable/>
        </div>
    );
}
export default MainPage;