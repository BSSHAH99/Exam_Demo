import React from 'react'

const DemoButton = ({ children = "I AM Button", type = "submit", disabled = false, onClick }) => {
    return (
        <div>
            <button type={type} className="btn btn-primary my-1" disabled={disabled} onClick={onClick}>{children}</button>
        </div>
    )
}

export default DemoButton






