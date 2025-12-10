import { Table } from "@mui/joy";
import { colorStatus, tableContainerStyle, tableStyle } from "../styles/MUICustom";
import type { FC } from "react";
import { useAppState } from "../context/AppStateContext";
import { NoCourse } from "./NoCourse";
import { TableContainer } from "@mui/material";



const CourseTable: FC<TableProps> = ({ data }) => {
    const { setSelectedCourse, setOpenCourseModal } = useAppState();

    const onClickName = (course: Course) => {
        setSelectedCourse(course)
        setOpenCourseModal(true)
    }
    return (
        <div>
            <TableContainer sx={tableContainerStyle}>
                <Table size="md" sx={tableStyle}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length == 0 ? (
                        <tr>
                            <td colSpan={5} style={{ textAlign: "center", padding: "2rem" }}>
                                <NoCourse />
                            </td>
                        </tr>
                    ) : data.map((course, index) => (
                        <tr key={index}>
                            <td><p className="course-name" onClick={() => onClickName(course)}>{course.name}</p></td>
                            <td>{course.category}</td>
                            <td>{course.rating}</td>
                            <td>{course.description.slice(0, 50) + "..."}</td>
                            <td><p
                                style={{
                                    ...colorStatus[course.status.replace(" ", "")],
                                    fontWeight: 'bold',
                                    width: 'fit-content',
                                    margin: '0 auto',
                                    padding: '0.1rem 0.5rem',
                                    borderRadius: '1rem'
                                }}
                            >{course.status}</p></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </TableContainer>
        </div>

    );
}
export default CourseTable;