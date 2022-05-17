import {  NavLink } from "react-router-dom"

export const NavBar=()=>{
    return (
        <div className="navBar"> 
            <NavLink className="links" to="/">Home</NavLink>
            
            <NavLink className="links" to="/contact">Contact</NavLink>
        </div>
    )
}
