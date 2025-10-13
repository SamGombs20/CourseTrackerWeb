import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import { useState } from "react";
import CourseTable from "./CourseTable";
import { useAppState } from "../context/AppStateContext";
import { tablistStyle } from "../styles/MUICustom";

const FilteredCourseTable = () => {
    const [index, setIndex] = useState(0);
    const {courses} = useAppState();
    return (
        <div>
            <Tabs
            value={index} onChange={(_e, newValue)=>{
                if (typeof newValue === "number") {
                    setIndex(newValue);
                }
            }}>
                <TabList sx={tablistStyle}>
                    <Tab value={0}>All Courses</Tab>
                    <Tab value={1}>Completed</Tab>
                    <Tab value={2}>In Progress</Tab>
                    <Tab value={3}>Not Started</Tab>
                </TabList>
                <TabPanel value={0}>
                    <CourseTable data={courses} />
                </TabPanel>
                <TabPanel value={1}>
                    <CourseTable data={courses.filter(course=>course.status==="Completed")} />
                </TabPanel>
                <TabPanel value={2}>
                    <CourseTable data={courses.filter(course=>course.status==="In Progress")} />
                </TabPanel>
                <TabPanel value={3}>
                    <CourseTable data={courses.filter(course=>course.status==="Not Started")} />
                </TabPanel>
            </Tabs>
        </div>
    );
}
export default FilteredCourseTable;