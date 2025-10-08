import { Table } from "@mui/joy";
import { tableStyle } from "../styles/MUICustom";

const CourseTable =()=>{
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

                </tbody>
            </Table>
        </div>
    );
}
export default CourseTable;