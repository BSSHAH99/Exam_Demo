import React from 'react'



const DemoRadioInput = (props) => {
    const { label, id, name, onChange, error, value, checked, ...inputpprops } = props;
    return (
        <div>
            <div className="mb-3">
                <div className="form-check">
                    <input
                        {...inputpprops}
                        className="form-check-input"
                        name={name}
                        onChange={onChange}
                        value={label}
                        checked={checked}
                    />
                    <label className="form-check-label">
                        {label}
                    </label>
                </div>
                <p className='my-3' style={{ color: "red" }}>{error[name]}</p>
            </div>
        </div>
    )
}

export default DemoRadioInput

