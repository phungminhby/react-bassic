import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss'

class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
                <NavLink to="/" activeClassName = "active" exact = {true}>Home</NavLink>
                <NavLink to="/todo" activeClassName = "active" exact = {true}>Todos</NavLink>
                <NavLink to="/about" activeClassName = "active" exact = {true}>About</NavLink>
                <NavLink to="/user" activeClassName = "active" exact = {true}>Users</NavLink>
            </div>
        )
    }
}
export default Nav;
