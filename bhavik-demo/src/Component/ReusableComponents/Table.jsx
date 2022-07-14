import React from 'react'
import DemoButton from './DemoButton';

const Table = ({ tableheadings, tableData, Detail, DetailName, Edit, EditName, Delete, ResultName, Result, DeleteName }) => {

    let keys

    if (tableheadings) {
        keys = tableheadings

    } else {
        keys = tableData && Array.isArray(tableData) ? Object.keys(tableData[0] || {}) : [];

    }




    // const keys = ["subjectName", "email", "Result"];

    // let keys = [];
    // if (tableData && Array.isArray(tableData)) {
    //     Object.entries(tableData[0]).map(([k]) => {
    //         k === "_id" || k === "__v" || k === "notes" ? console.log("") : keys.push(k);

    //     })
    // }
    // console.log('keys :>> ', keys);
    return (
        <div>
            <div className="container my-3">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {window.location.pathname === "/preview-exam" && <th>id</th>}
                                {
                                    // tableheadings ? tableheadings.map((key, i) => {
                                    //     return (
                                    //         <th key={i}>{key.toUpperCase()}</th>
                                    //     )
                                    // }) :
                                    keys?.map((key, i) => {
                                        return (
                                            <th key={i}>{key.toUpperCase()}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {tableData?.length > 0 &&
                                tableData.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            {/* {window.location.pathname === "/preview-exam" && <td>{index + 1}</td>} */}
                                            {keys.map((key, i) => {
                                                return (
                                                    // value[key]===undefined ? null:
                                                    <React.Fragment key={i}>
                                                        {Array.isArray(data[key]) ? (
                                                            window.location.pathname === "/student-deshbord" || window.location.pathname === "/preview-exam" ? (
                                                                <td>{`${data[key]}`}</td>
                                                            ) : (
                                                                <>
                                                                    {data[key].length > 0 && (
                                                                        <Table tableData={data[key]} />
                                                                    )}
                                                                </>
                                                            )
                                                        ) : (
                                                            <td>{data[key]}</td>
                                                        )}

                                                    </React.Fragment>
                                                );
                                            })}
                                            {Result &&
                                                <React.Fragment>
                                                    <td>
                                                        <DemoButton onClick={(e) => Result(e, index, data._id)}> {ResultName}</DemoButton>
                                                    </td>
                                                </React.Fragment>
                                            }
                                            {Detail &&
                                                <React.Fragment>
                                                    <td>
                                                        <DemoButton onClick={(e) => Detail(e, index, data._id)}> {DetailName}</DemoButton>
                                                    </td>
                                                </React.Fragment>
                                            }
                                            {Edit &&
                                                <React.Fragment>
                                                    <td>
                                                        <DemoButton onClick={(e) => Edit(e, index, data._id)}> {EditName}</DemoButton>
                                                    </td>
                                                </React.Fragment>
                                            }
                                            {Delete &&
                                                <React.Fragment>
                                                    <td>
                                                        <DemoButton onClick={(e) => Delete(e, index, tableData._id)}> {DeleteName}</DemoButton>
                                                    </td>
                                                </React.Fragment>
                                            }

                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table







// all view prevu 