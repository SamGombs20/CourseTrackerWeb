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
type AddCourseProps ={
    open:boolean;
    handleClose:()=>void;
}