import React from 'react'

const DemoInput = (props) => {
    const { label, id, name, onChange, error = "", ...inputpprops } = props;
    return (
        <div>
            <div className="my-3">
                <label className="form-label">{label}</label>
                <br />
                <input

                    {...inputpprops}
                    onChange={onChange}
                    name={name}
                    className="form-control"
                />
                <p className='my-3' style={{ color: "red" }}>{error[name]}</p>
                <br />
            </div>
        </div>
    )
}

export default DemoInput
