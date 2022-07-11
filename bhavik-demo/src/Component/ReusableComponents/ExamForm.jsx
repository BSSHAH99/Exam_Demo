import React from 'react'

const ExamForm = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {formAttribute.map((data, i) => {
                    return (
                        <div key={i}>
                            {(() => {
                                switch (data.type) {
                                    case "radio":
                                        return (
                                            <div>
                                                {data.value.map((ele, i) => {

                                                    return (
                                                        <div style={{ display: "flex" }} key={i}>

                                                            <Input
                                                                type="radio"
                                                                name={data.name}
                                                                onChange={handleChange}
                                                                value={
                                                                    typeof ele === "string"
                                                                        ? ele
                                                                        : formValues[ele.name]
                                                                }
                                                                checked={
                                                                    formValues[ele.name] &&
                                                                    formValues[ele.name] === formValues.answer
                                                                }
                                                            />
                                                            {typeof ele === "string" ? (
                                                                <label>{ele}</label>
                                                            ) : (
                                                                <>

                                                                    <Input
                                                                        disabled={window.location.pathname === "/give-exam"}
                                                                        type={ele.type}
                                                                        name={ele.name}
                                                                        value={formValues[ele.name] ?? ""}
                                                                        placeholder={ele.placeholder}
                                                                        onChange={handleChange}
                                                                    />

                                                                    <p style={{ color: "red" }}>
                                                                        {formErrors[ele.name]}
                                                                    </p>
                                                                </>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                                {data.name !== "answer" ? (
                                                    <p style={{ color: "red" }}>
                                                        {formErrors[data.name]}
                                                    </p>
                                                ) : null}
                                                <p style={{ color: "red" }}>
                                                    {optionError ? "duplicate option not allow" : null}
                                                </p>
                                            </div>
                                        );

                                    case "dropdown":
                                        return (
                                            <div>
                                                <select
                                                    disabled={index !== 1 || window.location.pathname === "/give-exam"}
                                                    onChange={handleChange}
                                                    name={data.name}
                                                    value={formValues[data.name]}
                                                >
                                                    <option value="">select subject</option>
                                                    {data.options.map((option, i) => {
                                                        return (
                                                            <option key={i} value={option}>
                                                                {option}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                <p style={{ color: "red" }}>{formErrors[data.name]}</p>
                                            </div>
                                        );
                                    default:

                                        return (
                                            <div>
                                                {window.location.pathname === "/login" || window.location.pathname === "/register" ||
                                                    window.location.pathname === "/create-exam" || window.location.pathname === "/edit-exam" ||
                                                    (window.location.pathname === "/give-exam" && data.name !== "notes") || (window.location.pathname === "/edit-give-exam" && data.name !== "notes") ?
                                                    <div>
                                                        <Input
                                                            label={data.label}
                                                            value={
                                                                window.location.pathname === "/create-exam" || window.location.pathname === "/edit-exam"
                                                                    ? formValues[data.name] === "" &&
                                                                        data.name === "notes"
                                                                        ? (formValues[data.name] = " ")
                                                                        : formValues[data.name] ?? ""
                                                                    : formValues[data.name] ?? ""
                                                            }
                                                            type={data.type}
                                                            name={data.name}
                                                            placeholder={data.placeholder}
                                                            onChange={handleChange}
                                                        />
                                                        <p style={{ color: "red" }}>{formErrors[data.name]}</p>

                                                    </div>

                                                    : null}

                                            </div>
                                        );
                                }
                            })()}
                        </div>
                    );
                })}

                {button &&
                    button.map((child, i) => (
                        <Button
                            key={i}
                            disabled={child === "prev"
                                ? index === 1 ? true : false : index === 15 || (window.location.pathname === "/give-exam" && index === 7) || (window.location.pathname === "/edit-give-exam" && index === 7) ? child === "next" || child === "clear" : index <= data.questions.length ? false || (window.location.pathname === "/give-exam" && child === "clear") || (window.location.pathname === "/edit-give-exam" && child === "clear") : child === "next"
                            }
                            children={child}
                            value={child}
                            onClick={
                                child === "clear"
                                    ? clear
                                    : child === "next"
                                        ? () => {
                                            next();
                                            prevClearErrors();
                                        }
                                        : child === "prev"
                                            ? () => {
                                                prev();
                                                prevClearErrors();
                                            }
                                            : undefined
                            }
                            type={
                                child === "clear" || child === "next" || child === "prev"
                                    ? "button"
                                    : "submit"
                            }
                        />
                    ))}

                <Button
                    children={
                        button
                            ? index === 15
                                ? window.location.pathname === "/edit-exam" ? "update" : "create exam"
                                : index <= data.questions.length
                                    ? window.location.pathname === "/edit-exam" ? "update" : window.location.pathname === "/create-exam" ? "update" :
                                        window.location.pathname === "/give-exam" || window.location.pathname === "/edit-give-exam" ? index === 7 ? "preview" : pop ? "add" : "skip" : "update"
                                    : "add"
                            : "submit"
                    }
                    disabled={window.location.pathname === "/give-exam" && index < 7 ? true : window.location.pathname === "/edit-give-exam" && index < 7 ? true : false}

                />
            </form>
        </div>
    );
}

export default ExamForm
