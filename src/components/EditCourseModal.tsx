import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { formHelperText, modalStyle, textFieldStyles } from "../styles/MUICustom";
import { useState, type FC } from "react";

export const EditCourseModal: FC<EditCourseProps> = ({ open, selectedCourse, handleClose, }) => {
    const [course, setCourse] = useState(selectedCourse)
    const [errors, setErrors] = useState<ErrorFields>({
        name: '', category: '', description: '', status: ''
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({
            ...prevCourse,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    }
    const onEdit = ()=>{
        console.log(course)
    }
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <div className="course-form-container">
                    <p className="title-text form-title">Add Course</p>
                    <form action="" className="course-form">
                        <TextField label="Course name" name="name" sx={textFieldStyles}
                            onChange={handleChange} helperText={errors.name} error={!!errors.name} />
                        <TextField label="Category" name="category" sx={textFieldStyles} onChange={handleChange}
                            helperText={errors.category} error={!!errors.category} />
                        <TextField label="Description" name="description"
                            sx={textFieldStyles} multiline rows={3} onChange={handleChange}
                            error={!!errors.description} helperText={errors.description} />

                        <FormControl sx={textFieldStyles}>
                            <InputLabel id="course-status">Status</InputLabel>
                            <Select labelId="course-status" id="status" label="Status" name="status"
                                onChange={handleChange} error={!!errors.status} >
                                <MenuItem value="Not Started">Not Started</MenuItem>
                                <MenuItem value="In Progress">In Progress</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                            </Select>
                            {errors.status && <FormHelperText sx={formHelperText}>{errors.status}</FormHelperText>}
                        </FormControl>
                        <TextField label="Start Date" name="startDate" onChange={handleChange} sx={textFieldStyles} type="date" slotProps={{
                            inputLabel: { shrink: true }
                        }} />
                        <TextField label="End Date" name="endDate" sx={textFieldStyles} type="date" onChange={handleChange} slotProps={{
                            inputLabel: { shrink: true }
                        }} />
                        <TextField label="Rating" name="rating" sx={textFieldStyles} onChange={handleChange} />
                        <div className="form-buttons">
                            <button type="button" onClick={handleClose}>Cancel</button>
                            <button type="button" onClick={onEdit}>Save</button>
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    );
}