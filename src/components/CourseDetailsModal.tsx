import { MdDescription } from "react-icons/md";
import "./CourseDetailsModal.css";
import { BiSolidCategory } from "react-icons/bi";
import { RiProfileFill, RiProgress5Line } from "react-icons/ri";
import { BsCalendarRangeFill } from "react-icons/bs";
import { FcRating } from "react-icons/fc";
import { GiBookPile } from "react-icons/gi";
import { type FC } from "react";
import { Box, Modal } from "@mui/material";
import { colorStatus, modalStyle } from "../styles/MUICustom";
const CourseDetailsModal: FC<CourseModalProps> = ({ open, handleClose, selectedCourse,handleOpenEdit }) => {
    const closeModal = () => {
        handleClose(false)
    }
    return (
        <Modal open={open} onClose={closeModal}>
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
                                <RiProfileFill className="icon" />
                            </div>
                            <p>{selectedCourse?.name}</p>
                        </div>
                        <div className="detail-container">
                            <div className="detail-title">
                                <p className="title-text title">Course Category</p>
                                <BiSolidCategory className="icon" />
                            </div>
                            <p>{selectedCourse?.category}</p>
                        </div>
                        <div className="detail-container">
                            <div className="detail-title">
                                <p className="title-text title">Course Description</p>
                                <MdDescription className="icon" />
                            </div>
                            <p>{selectedCourse?.description}</p>
                        </div>
                        <div className="detail-container">
                            <div className="detail-title">
                                <p className="title-text title">Status</p>
                                <RiProgress5Line className="icon" />
                            </div>
                            {selectedCourse != null && (
                                <p
                                    style={{ ...colorStatus[selectedCourse.status.replace(" ", "")],
                                        width:'fit-content',
                                        padding:"0.3rem 0.5rem",
                                        borderRadius:"1rem"
                                     }}>{selectedCourse.status}</p>
                            )}
                        </div>
                        <div className="detail-container">
                            <div className="detail-title">
                                <p className="title-text title">Duration</p>
                                <BsCalendarRangeFill className="icon" />
                            </div>
                            <p>{selectedCourse?.startDate} - {selectedCourse?.endDate}</p>
                        </div>
                        <div className="detail-container">
                            <div className="detail-title">
                                <p className="title-text title">Rating</p>
                                <FcRating className="icon" />
                            </div>
                            <p>{selectedCourse?.rating}</p>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="custom-btn" onClick={handleOpenEdit}>Edit</button>
                        <button className="custom-btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}
export default CourseDetailsModal;