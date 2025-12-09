import { FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material"
import { textFieldStyles } from "../styles/MUICustom"
import "./AuthenticationPage.css"
import { useState, type ChangeEvent } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export const RegisterPage = () => {
    const [inputs, setInputs] = useState<SignUp>({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [inputErrors, setInputErrors] = useState<SignUpErrors>({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const {signUp} = useAuth()
    const navigate = useNavigate()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))
        setInputErrors((prev) => ({
            ...prev,
            [name]: ""
        }))
    }
    const validateInputs =():boolean=>{
        const errors:SignUpErrors = {
            firstName:"",
            lastName:"",
            username:'',
            password:"",
            confirmPassword:""
        }
        if(!inputs.firstName.trim()){
            errors.firstName = "First name is required"
        }
        if(!inputs.lastName.trim()){
            errors.lastName = "Last name is required"
        }
        if(!inputs.username.trim()){
            errors.username = "Username is required"
        }
        else if(inputs.username.length < 3){
            errors.username = "Username must be at least 3 characters"
        }
        if(!inputs.password.trim()){
            errors.password = "Password is required"
        }else if(inputs.password.length<6){
            errors.password = "Password must be at least 6 characters"
        }
        if (!inputs.confirmPassword.trim()){
            errors.confirmPassword = "Please confirm password"
        }
        else if(inputs.confirmPassword !== inputs.password){
            errors.confirmPassword = "Passwords do not match"
        }

        const hasErrors = Object.values(errors).some((err)=> err !== "")
        setInputErrors(errors)
        return !hasErrors;
    }
    const signUpUser = () => {
        if(!validateInputs()) return;
        setInputs((prev)=>({
            ...prev,
        }))
        signUp(inputs)
    }
    return (
        <div className="login-page">
            <div className="logo-title">
                <div className="logo"></div>
                <p className="navbar-title">Course<span className="navbar-title">Tracker</span></p>
            </div>
            <div className="register-container main-container">
                <div className="text">
                    <p className="title-text main-text">Create an account</p>
                    <p>Sign up and start managing your courses!</p>
                </div>
                <div>
                    <div className="inputs">
                        <div>
                            <p className="label">First name</p>
                            <TextField
                                name="firstName"
                                value={inputs.firstName}
                                onChange={handleChange}
                                error={!!inputErrors.firstName}
                                helperText={inputErrors.firstName}
                                sx={textFieldStyles} />
                            <p className="label">Last name</p>
                            <TextField
                                name="lastName"
                                value={inputs.lastName}
                                error={!!inputErrors.lastName}
                                helperText={inputErrors.lastName}
                                onChange={handleChange}
                                sx={textFieldStyles} />
                            <p className="label">Username</p>
                            <TextField
                                name="username"
                                value={inputs.username}
                                onChange={handleChange}
                                error={!!inputErrors.username}
                                sx={textFieldStyles} />
                        </div>
                        <div>
                            <p className="label">Password</p>
                            <FormControl
                                sx={textFieldStyles}
                                error={!!inputErrors.password}
                            >
                                <OutlinedInput
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={inputs.password}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? (<MdVisibility />) : (<MdVisibilityOff />)}
                                            </IconButton>
                                        </InputAdornment>
                                    } />
                                <FormHelperText>{inputErrors.password}</FormHelperText>
                            </FormControl>
                            <p className="label">Confirm Password</p>
                            <FormControl
                                sx={textFieldStyles}
                                error={!!inputErrors.confirmPassword}
                            >
                                <OutlinedInput
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={inputs.confirmPassword}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {showConfirmPassword ? (<MdVisibility />) : (<MdVisibilityOff />)}
                                            </IconButton>
                                        </InputAdornment>
                                    } />
                                    <FormHelperText>{inputErrors.confirmPassword}</FormHelperText>
                            </FormControl>
                        </div>
                    </div>
                    <p>Already have an account? <span className="span" onClick={()=>navigate("/login")}>Sign in</span></p>
                    {/* <p className="forgot">Forgot Password?</p> */}
                    {/* {apiError && (<p className="error-text" style={{textAlign:"center"}}>{apiError}</p>)} */}
                    <button onClick={signUpUser} className="button">Register</button>
                </div>
            </div>
            <div className="copyright">
                <p>&copy;2025. All Rights Reserved.</p>
            </div>
        </div>
    )
}