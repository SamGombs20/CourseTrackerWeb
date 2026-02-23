import { FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import "./AuthenticationPage.css"
import { textFieldStyles } from "../styles/MUICustom";
import { useState, type ChangeEvent } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { validatePassword, validateUsername } from "../utils/common";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
export const LogInPage = () => {
    const {login} = useAuth()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState<SignIn>({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState<SignInErrors>({
        username:"",
        password:""
    })
    const [apiError, setApiError] = useState("")
    

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setInputs((prev: SignIn) => ({
            ...prev,
            [name]: value
        }))
        setErrors((prev)=>({
            ...prev,
            [name]:""
        }))
        setApiError("")
    }
    

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleLogIn =async () => {
        const passwordError = validatePassword(inputs.password)
        const usernameError = validateUsername(inputs.username)
        setErrors({
            username:usernameError,
            password:passwordError
        });
        if (usernameError || passwordError) return;

        try{
            setApiError("")
            setLoading(true)
            await login(inputs.username, inputs.password);

        } catch(err:any){
            setApiError(err.message)
        }
        finally{

        }
    }
    return (
        <div className="login-page">
            <div className="logo-title">
                <div className="logo"></div>
                <p className="navbar-title">Course<span className="navbar-title">Tracker</span></p>
            </div>
            <div className="main-container">
                <div className="text">
                    <p className="title-text main-text">Welcome Back!</p>
                    <p>Sign in to manage your courses.</p>
                </div>
                <div>
                    <p className="label">Username</p>
                    <TextField
                        name="username"
                        value={inputs.username}
                        onChange={handleInputChange}
                        error= {!!errors.username}
                        helperText = {errors.username}
                        sx={textFieldStyles} />
                    <p className="label">Password</p>
                    <FormControl
                        sx={textFieldStyles}
                        error= {!!errors.password}
                    >
                        <OutlinedInput
                            name="password"
                            value={inputs.password}
                            onChange={handleInputChange}
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword}>
                                        {showPassword ? (<MdVisibility />) : (<MdVisibilityOff />)}
                                    </IconButton>
                                </InputAdornment>
                            } />
                            <FormHelperText>{errors.password}</FormHelperText>
                    </FormControl>
                    {/* <p className="forgot">Forgot Password?</p> */}
                    
                    <p>Don't have an accout? <span className="span" onClick={()=>navigate("/register")}>Sign up</span></p>
                    {apiError && (<p className="error-text" style={{textAlign:"center"}}>{apiError}</p>)}
                    {loading ? (<Loading/>):(<button onClick={handleLogIn} className="button">Login</button>)}
                </div>
            </div>
            <div className="copyright">
                <p>&copy;2025. All Rights Reserved.</p>
            </div>
        </div>
    );
}