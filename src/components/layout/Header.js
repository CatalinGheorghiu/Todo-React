import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linksStyle} to="/">
                Home
            </Link>{" "}
            |{" "}
            <Link style={linksStyle} to="/about">
                About
            </Link>
        </header>
    );
}

const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
};

const linksStyle = {
    color: "#fff",
    textDecoration: "none",
};

export default Header;
