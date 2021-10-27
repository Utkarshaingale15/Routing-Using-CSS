import React from "react";

import { NavLink } from "react-router-dom";

const Menu = () => {
    return(
        <div>
            <div className="navbar navbar-expand-sm bg-light navbar-light">

        <NavLink exact to="/">Home</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/bootstrap">Bootstrap</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/c">C</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/cplus">C++</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/css">CSS</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/java">Java</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/javascript">Javascript</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/nodejs">NodeJS</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/python">Python</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/reactjs">ReactJS</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/sql">SQL</NavLink>&nbsp;&nbsp;

        </div>
        </div>
    );
}
export default Menu;