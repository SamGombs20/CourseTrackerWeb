import { Table } from "@mui/joy";
import { colorStatus, tableStyle } from "../styles/MUICustom";

const courseData = [
    { name: "React for Beginners", category: "Web Development", rating: 4.5, description: "Learn the basics of React.js and build dynamic web applications.", status: "In Progress" },
    { name: "Advanced Python", category: "Programming", rating: 4.8, description: "Deep dive into advanced Python concepts and libraries.", status: "Not Started" },
    { name: "Data Science with R", category: "Data Science", rating: 4.2, description: "Explore data analysis and visualization using R programming.", status: "Completed" },
]

const CourseTable = () => {
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
                    {courseData.map((course, index) => (
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