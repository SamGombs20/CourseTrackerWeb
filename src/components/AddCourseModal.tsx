import TextField from "@mui/material/TextField"
import { modalStyle, textFieldStyles } from "../styles/MUICustom"
import { useState, type FC } from "react";
import { nanoid } from "nanoid";
import { Box, FormControl, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import type { AddCourseProps, Course } from "../types/global";


const AddCourseModal: FC<AddCourseProps> = ({ open, handleClose }) => {
    const [course, setCourse] = useState<Course>({
        id: '',
        name: '',
        category: '',
        description: '',
        status: '',
        startDate: '',
        endDate: '',
        rating: "",
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
    }
    const onAddCourse = () => {
        const newCourse = { ...course, id: nanoid() };
        setCourse(newCourse);

    }
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <div className="course-form-container">
                    <p className="title-text form-title">Add Course</p>
                    <form action="" className="course-form">
                        <TextField label="Course name" name="name" value={course.name} sx={textFieldStyles} onChange={handleChange} />
                        <TextField label="Category" name="category" sx={textFieldStyles} value={course.category} onChange={handleChange} />
                        <TextField label="Description" name="description" sx={textFieldStyles} multiline rows={3} onChange={handleChange} />
                        
                        <FormControl sx={textFieldStyles}>
                            <InputLabel id="course-status">Status</InputLabel>
                            <Select labelId="course-status" id="status" label="Status" name="status"
                                 onChange={handleChange}>
                                <MenuItem value="Not Started">Not Started</MenuItem>
                                <MenuItem value="In Progress">In Progress</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField label="Start Date" name="startDate" value={course.startDate} onChange={handleChange} sx={textFieldStyles} type="date" slotProps={{
                            inputLabel: { shrink: true }
                        }} />
                        <TextField label="End Date" name="endDate" sx={textFieldStyles} type="date" value={course.endDate} onChange={handleChange} slotProps={{
                            inputLabel: { shrink: true }
                        }} />
                        <TextField label="Rating" name="rating" sx={textFieldStyles} value={course.rating} onChange={handleChange} />
                        <div className="form-buttons">
                            <button type="button" onClick={handleClose}>Cancel</button>
                            <button type="button" onClick={onAddCourse}>Add</button>
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    )
}
export default AddCourseModal;