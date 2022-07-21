import React from 'react'
import DemoButton from './DemoButton';

const Table = ({ tableheadings, tableData, Detail, DetailName, Edit, EditName, Delete, ResultName, Result, DeleteName, GiveExam, GiveExamName }) => {

    let keys

    if (tableheadings) {
        keys = tableheadings

    } else {
        let tempKeys = []
        Object.entries(tableData[0]).map(([key]) => {
            key === "_id" || key === "studentId" || key === "__v" ? console.log('object :>> ') : tempKeys.push(key)
        })
        keys = tempKeys
        // console.log('keys :>> ', keys);
        // keys = tableData && Array.isArray(tableData) ? Object.keys(tableData[0] || {}) : [];

    }
    return (
        <div>
            <div className="container my-3">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                {window.location.pathname === "/preview-exam" && <th>id</th>}
                                {
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
                                    // console.log('data :>> ', data);
                                    return (
                                        <tr key={index}>
                                            {keys.map((key, i) => {
                                                // console.log('keys :>> ', keys);
                                                return (
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
                                            {Detail &&
                                                <React.Fragment>
                                                    <td>
                                                        <DemoButton onClick={(e) => Detail(e, index, data._id, data)}> {DetailName}</DemoButton>
                                                    </td>
                                                </React.Fragment>
                                            }
                                            {Result &&
                                                <React.Fragment>
                                                    <td>
                                                        <DemoButton onClick={(e) => Result(e, index, data._id, data)} disabled={data.Result.length > 0 ? false : true}> {ResultName}</DemoButton>
                                                    </td>
                                                </React.Fragment>
                                            }
                                            {Edit &&
                                                <React.Fragment>
                                                    <td>
                                                        <DemoButton onClick={(e) => Edit(e, index, data._id, data)} > {EditName}</DemoButton>
                                                    </td>
                                                </React.Fragment>
                                            }
                                            {GiveExam &&
                                                <React.Fragment>
                                                    <td>
                                                        <DemoButton onClick={(e) => GiveExam(e, index, data._id)} disabled={data.Result.length > 0 ? true : false}> {GiveExamName}</DemoButton>
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