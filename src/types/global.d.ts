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
type AuthContext={
    user:any;
    token:string | null;
    login:(username:string, password:string)=>Promise<void>;
    logout:()=>void;
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
type SignIn ={
    username:string;
    password:string;
}
type SignUp = {
    id:string
    firstName:string;
    lastName:string;
    username:string
    password:string
    confirmPassword:string
}
type SignInErrors ={
    username:string;
    password:string
}
type SignUpErrors={
    firstName:string;
    lastName:string;
    username:string
    password:string
    confirmPassword:string
}
type User ={
    id:string
    firstName:string
    lastName:string
    username:string
    password:string
}