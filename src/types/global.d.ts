type Course ={
    id:string;
    name:string;
    category:string;
    description:string;
    status:"Not Started" | "In Progress" | "Completed"|"";
    startDate?:string;
    endDate?:string;
    rating?:string;
}
type AppState = {
    courses:Course[];
}
type AddCourseProps ={
    open:boolean;
    handleClose:()=>void;
}
type EditCourseProps = {
    open:boolean;
    handleClose:()=>void;
    selectedCourse:Course;
}
type TableProps ={
    data:Course[];
}
type CourseModalProps={
    open:boolean;
    handleClose:(open:boolean)=>void;
   selectedCourse:Course|null;
   handleOpenEdit:()=>void;
}
type ErrorFields ={
    name:string;
    category:string;
    description:string;
    status:string;
}