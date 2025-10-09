type Course ={
    id:string;
    name:string;
    category:string;
    description:string;
    status:"Not Started" | "In Progress" | "Completed"|"";
    startDate?:string;
    endDate?:string;
    rating?:number;
}
type AddCourseProps ={
    onAddCourse: () => Course;
}