import { Table } from "@mui/joy";
import { colorStatus, tableStyle } from "../styles/MUICustom";
import type { FC } from "react";



const CourseTable:FC<TableProps> = ({data}) => {
    return (
        <div>
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
                    {data.map((course, index) => (
                        <tr key={index}>
                            <td className="course-name">{course.name}</td>
                            <td>{course.category}</td>
                            <td>{course.rating}</td>
                            <td>{course.description}</td>
                            <td style={{
                                ...colorStatus[course.status.replace(" ", "")],
                                fontWeight: 'bold',
                                width: 'fit-content',
                                margin: '0 auto',
                                padding: '0.1rem 0.5rem',
                            }}>{course.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
export default CourseTable;