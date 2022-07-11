import React from 'react'

const Alert = ({ children = " A simple primary alert—check it out!", className = "alert alert-primary" }) => {
    return (
        <div className={className} role="alert">
            {children}
        </div>

    )
}

export default Alert
