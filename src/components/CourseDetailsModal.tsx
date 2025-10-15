import { MdDescription } from "react-icons/md";
import "./CourseDetailsModal.css";
import { BiSolidCategory } from "react-icons/bi";
import { RiProgress5Line } from "react-icons/ri";
import { BsCalendarRangeFill } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
const CourseDetailsModal = () => {
    return (
        <div>
            <div className="detail-container">
                <p className="title-text title">Course Name</p>
                <p>React for beginners</p>
            </div>
            <div className="detail-container">
                <div className="detail-title">
                    <p className="title-text title">Course Category</p>
                    <BiSolidCategory />
                </div>
                <p>Web Development</p>
            </div>
            <div className="detail-container">
                <div className="detail-title">
                    <p className="title-text title">Course Description</p>
                    <MdDescription/>
                </div>
                <p>Learn the basics of React.js and build dynamic web applications.</p>
            </div>
            <div className="detail-container">
                <div className="detail-title">
                    <p className="title-text title">Status</p>
                    <RiProgress5Line/>
                </div>
                <p>In Progress</p>
            </div>
            <div className="detail-container">
                <div className="detail-title">
                    <p className="title-text title">Duration</p>
                    <BsCalendarRangeFill/>
                </div>
                <p>10/23/2024 - 12/13/2025</p>
            </div>
            <div className="detail-container">
                <div className="detail-title">
                    <p className="title-text title">Rating</p>
                    <FcRating/>
                </div>
                <p>4.7</p>
            </div>
        </div>
    );
}
export default CourseDetailsModal;