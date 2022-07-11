import React from 'react'
import { Link } from "react-router-dom";

const OneLink = ({ children = "I AM Button", to = "submit", }) => {
    return (
        <Link to={to}>{children}</Link>)
}

export default OneLink