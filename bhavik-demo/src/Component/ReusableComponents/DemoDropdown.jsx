import React from 'react'

const DemoDropdown = (props) => {
    const { label, id, name, options, onChange, error = "", ...inputpprops } = props;
    return (
        <div>
            <div className="mb-3">
                <div className="mb-3">
                    <select id="disabledSelect" className="form-select">
                        <option value="">Select Subject</option>
                        {options.map((items, index) => {
                            return <option key={index}>{items}</option>
                        })}
                    </select>
                </div>
            </div>
        </div>

    )
}

export default DemoDropdown
