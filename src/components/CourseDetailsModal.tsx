import "./CourseDetailsModal.css";
const CourseDetailsModal =()=>{
    return (
        <div>
            <div className="detail-container">
                <p className="title-text title">Course Name</p>
                <p>React for beginners</p>
            </div>
            <div className="detail-container">
                <p className="title-text title">Course Category</p>
                <p>Web Development</p>
            </div>
            <div className="detail-container">
                <p className="title-text title">Course Description</p>
                <p>Learn the basics of React.js and build dynamic web applications.</p>
            </div>
            <div className="detail-container">
                <p className="title-text title">Status</p>
                <p>In Progress</p>
            </div>
            <div className="detail-container">
                <p className="title-text title">Duration</p>
                <p>10/23/2024 - 12/13/2025</p>
            </div>
            <div className="detail-container">
                <p className="title-text title">Rating</p>
                <p>4.7</p>
            </div>
        </div>
    );
}
export default CourseDetailsModal;