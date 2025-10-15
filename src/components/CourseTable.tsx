import { Table } from "@mui/joy";
import { colorStatus, tableStyle } from "../styles/MUICustom";
import type { FC } from "react";
import { useAppState } from "../context/AppStateContext";



const CourseTable: FC<TableProps> = ({ data }) => {
    const {setSelectedCourse} = useAppState();

    const onClickName =(course:Course)=>{
        setSelectedCourse(course)
        console.log(course)
    }
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
                            <td><p className="course-name" onClick={()=>onClickName(course)}>{course.name}</p></td>
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
                                    borderRadius:'1rem'
                                }}
                            >{course.status}</p></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
export default CourseTable;