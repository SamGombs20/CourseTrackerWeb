import CourseTable from "../components/CourseTable";
import "./MainPage.css"
const MainPage =()=>{
    return (
        <div className="main-page-container">
            <p className="table-title">Your courses</p>
            <CourseTable/>
        </div>
    );
}
export default MainPage;