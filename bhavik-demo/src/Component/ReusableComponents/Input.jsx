import React from 'react'

const Input = (props) => {
    const { label, name, type, onChange, error = "", ...inputpprops } = props;
    return (
        <div>


            <label className="form-label">{label}</label>
            <br />
            <input
                type={type}
                {...inputpprops}
                onChange={onChange}
                name={name}
                className="form-control"
            />
            {/* <p style={{ color: "red" }}>{error[name]}</p> */}
            <br />

        </div>
    )
}

export default Input
