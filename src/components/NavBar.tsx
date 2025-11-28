import { useAuth } from "../hooks/useAuth";
import "./NavBar.css"
const NavBar =()=>{
    const {logout} = useAuth()

    return (
        <div className="navbar-container">
            <p className="navbar-title">Course<span className="navbar-title">Tracker</span></p>
            <button className="nav-btn" onClick={logout}>Sign out</button>
        </div>
    );
}
export default NavBar;