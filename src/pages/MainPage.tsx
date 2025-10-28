import { MdAddBox } from "react-icons/md";
import "./MainPage.css";
import AddCourseModal from "../components/AddCourseModal";
import { useState } from "react";
import FilteredCourseTable from "../components/FilteredCourseTable";
import CourseDetailsModal from "../components/CourseDetailsModal";
import { useAppState } from "../context/AppStateContext";
import { EditCourseModal } from "../components/EditCourseModal";
const MainPage = () => {
    const [open, setOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const { selectedCourse, openCourseModal, setOpenCourseModal, setSelectedCourse } = useAppState()
    const handleAddCourseOpen = () => {
        setSelectedCourse(null)
        setOpen(true)
    }
    const handleOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false)
    const handleClose = () => setOpen(false);


    return (
        <div className="main-page-container">
            <p className="greeting-text">Hello, <span className="name">John</span></p>
            <div className="table-header">
                <p className="table-title">Your courses</p>
                <MdAddBox className="add-btn" onClick={handleAddCourseOpen} />
            </div>
            <FilteredCourseTable />
            <AddCourseModal open={open} handleClose={handleClose} />
            <CourseDetailsModal open={openCourseModal} selectedCourse={selectedCourse} handleClose={setOpenCourseModal}
                handleOpenEdit={handleOpen} />
            {selectedCourse != null && (<EditCourseModal open={editOpen} handleClose={handleEditClose} />
            )}
        </div>
    );
}
export default MainPage;