import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import { formHelperText, modalStyle, textFieldStyles } from "../styles/MUICustom";
import { useEffect, useState, type FC } from "react";
import { useAppState } from "../context/AppStateContext";
import { editCourse } from "../utils/common";

export const EditCourseModal: FC<EditCourseProps> = ({ open, handleClose }) => {
    const { selectedCourse, dispatch } = useAppState();
    const [course, setCourse] = useState(selectedCourse)
    const [errors, setErrors] = useState<ErrorFields>({
        name: '', category: '', description: '', status: ''
    });
    useEffect(() => {
        setCourse(selectedCourse);
    }, [selectedCourse]);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => {
            if (!prevCourse) return null;
            return {
                ...prevCourse,
                [name]: value,
            };
        });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    }
    const onEdit = () => {
        dispatch(editCourse(course!))
        handleClose()
    }
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={modalStyle}>
                <div className="course-form-container">
                    <p className="title-text form-title">Edit Course</p>
                    <form action="" className="course-form">
                        <TextField label="Course name" name="name" sx={textFieldStyles}
                            onChange={handleChange} helperText={errors.name} error={!!errors.name} value={course?.name}/>
                        <TextField label="Category" name="category" sx={textFieldStyles} onChange={handleChange}
                            helperText={errors.category} error={!!errors.category} value={course!.category}/>
                        <TextField label="Description" name="description"
                            sx={textFieldStyles} multiline rows={3} onChange={handleChange}
                            error={!!errors.description} helperText={errors.description} value={course?.description}/>

                        <FormControl sx={textFieldStyles}>
                            <InputLabel id="course-status">Status</InputLabel>
                            <Select labelId="course-status" id="status" label="Status" name="status" value={course?.status}
                                onChange={handleChange} error={!!errors.status} >
                                <MenuItem value="Not Started">Not Started</MenuItem>
                                <MenuItem value="In Progress">In Progress</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                            </Select>
                            {errors.status && <FormHelperText sx={formHelperText}>{errors.status}</FormHelperText>}
                        </FormControl>
                        <TextField label="Start Date" value={course?.startDate} name="startDate" onChange={handleChange} sx={textFieldStyles} type="date" slotProps={{
                            inputLabel: { shrink: true }
                        }} />
                        <TextField label="End Date" name="endDate"  value={course?.endDate} sx={textFieldStyles} type="date" onChange={handleChange} slotProps={{
                            inputLabel: { shrink: true }
                        }} />
                        <TextField label="Rating" name="rating" sx={textFieldStyles} onChange={handleChange}  value={course?.rating}/>
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