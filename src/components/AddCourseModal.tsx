import TextField from "@mui/material/TextField"
import { formHelperText, modalStyle, textFieldStyles } from "../styles/MUICustom"
import { useState, type FC } from "react";
import { nanoid } from "nanoid";
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Modal, Select } from "@mui/material";
import { addCourse } from "../utils/common";
import { useAppState } from "../context/AppStateContext";


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
    const { dispatch } = useAppState();
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
    const validateInputs = () => {
        const newErrors: ErrorFields = {
            name: '', category: "", description: "", status: ""
        };

        if (!course.description.trim()) {
            newErrors.description = "Description is required";
        } else if (course.description.length < 10) {
            newErrors.description = "Description must be at least 10 characters long";
        }

        if (!course.name.trim()) {
            newErrors.name = "Course name is required";
        }

        if (!course.category.trim()) {
            newErrors.category = "Category is required";
        }
        if (!course.status.trim()) {
            newErrors.status = "Select the status of the course"
        }

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((msg) => msg !== "");
        return !hasErrors;
    };
    const onAddCourse = () => {
        console.log("Validating inputs.....")
        if (validateInputs()) {
            const newCourse = { ...course, id: nanoid() };
            console.log("Added course:", newCourse);

            dispatch(addCourse(newCourse));
            handleClose();

            setCourse({
                id: '',
                name: '',
                category: '',
                description: '',
                status: '',
                startDate: '',
                endDate: '',
                rating: "",
            });
        }
        else {
            console.log(validateInputs())
            console.log(errors)
        }
    };
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
                            <button type="button" onClick={onAddCourse}>Add</button>
                        </div>
                    </form>
                </div>
            </Box>
        </Modal>
    )
}
export default AddCourseModal;