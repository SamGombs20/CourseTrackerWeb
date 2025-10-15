import { MdDescription } from "react-icons/md";
import "./CourseDetailsModal.css";
import { BiSolidCategory } from "react-icons/bi";
import { RiProfileFill, RiProgress5Line } from "react-icons/ri";
import { BsCalendarRangeFill } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import { GiBookPile } from "react-icons/gi";
import { useState } from "react";
import { Box, Modal } from "@mui/material";
import { modalStyle } from "../styles/MUICustom";
const CourseDetailsModal = () => {
    const [open, setOpen] = useState(true);

    const handleClose =()=>{
        setOpen(false)
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <div className="details-container">
                <div className="details-title">
                    <GiBookPile />
                    <p className="title-text">Course Details</p>
                </div>
                <div>
                    <div className="detail-container">
                        <div className="detail-title">
                            <p className="title-text title">Course Name</p>
                            <RiProfileFill />
                        </div>
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
                            <MdDescription />
                        </div>
                        <p>Learn the basics of React.js and build dynamic web applications.</p>
                    </div>
                    <div className="detail-container">
                        <div className="detail-title">
                            <p className="title-text title">Status</p>
                            <RiProgress5Line />
                        </div>
                        <p>In Progress</p>
                    </div>
                    <div className="detail-container">
                        <div className="detail-title">
                            <p className="title-text title">Duration</p>
                            <BsCalendarRangeFill />
                        </div>
                        <p>10/23/2024 - 12/13/2025</p>
                    </div>
                    <div className="detail-container">
                        <div className="detail-title">
                            <p className="title-text title">Rating</p>
                            <FcRating />
                        </div>
                        <p>4.7</p>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="custom-btn">Close</button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}
export default CourseDetailsModal;