import React from 'react'
import DemoButton from './DemoButton';

const DemoTable = ({ tableData, tableheadings, DetailName, Detail, Edit, EditName, Delete, DeleteName, ...props }) => {


    const th = new Set();
    tableData.map((items) => {
        return Object.entries(items).map(([key]) => {
            key === "_id" || key === "__v" ? console.log("") : th.add(key);
        });
    });
    console.log('tableheadings :>> ', tableheadings);

    return (
        <div className="container my-3">
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {tableheadings ? tableheadings.map((th, i) => {
                                return (
                                    <th key={i} scope="col" >
                                        {th.toUpperCase()}
                                    </th>
                                );

                            }) :
                                Array.from(th.values()).map((items, index) => {
                                    return (
                                        <th key={index} scope="col" >
                                            {items.toUpperCase()}
                                        </th>
                                    );
                                })}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.length > 0 &&
                            tableData.map((data, index) => {
                                console.log('data :>> ', data);

                                return <React.Fragment key={index}>
                                    <tr>
                                        {
                                            Array.from(th.values()).map((item, i) => {
                                                console.log('item :>==============> ', data[item]);
                                                let arr = []
                                                let test = []
                                                if ((typeof data[item] === "object" && !Array.isArray(data[item]))) {
                                                    // console.log("typeof && !isarray cheking");
                                                    arr[0] = data[item]
                                                    // console.log('arr[0] typeof object and !isarray :>> ', arr[0]);
                                                }
                                                else if (typeof data[item] === "object" && Array.isArray(data[item])) {

                                                    if (window.location.pathname === "/student-deshbord") {

                                                    }
                                                    else {
                                                        test.push(data[item]);
                                                    }


                                                    // window.location.pathname("student-deshbord/")
                                                    // test.push(data[item]);
                                                }
                                                else {
                                                    arr = data[item]
                                                    // console.log('else :>> ', arr);
                                                }
                                                return <React.Fragment key={i}>
                                                    {test.length ?
                                                        // console.log('tessdfgsdfgdsgfgfgt :>> ', test)
                                                        test[0].map((items, i) => {
                                                            return (<React.Fragment>
                                                                <div key={i}>
                                                                    {i + 1}. {items}
                                                                </div>
                                                            </React.Fragment>)
                                                        })
                                                        : null}
                                                    {
                                                        (typeof arr === "object") && Array.isArray(arr) ?
                                                            <React.Fragment>
                                                                <DemoTable tableData={arr} />
                                                            </React.Fragment> :

                                                            < React.Fragment >
                                                                <td key={i}>{arr}</td>
                                                            </React.Fragment>






                                                        //  : <div>{data[item]}</div>

                                                        // (typeof data[item] === "object") && !Array.isArray(arr) ?
                                                        //     // (<div>{data[item]}</div>)
                                                        //     // arr[0] = data[item]
                                                        //     <DemoTable DemoTable tableData={data[item]}></DemoTable>
                                                        //     :

                                                        //     <React.Fragment>
                                                        //         <td key={i}>{arr}</td>
                                                        //     </React.Fragment>
                                                    }
                                                </React.Fragment>

                                            })
                                        }
                                        {
                                            Detail &&
                                            < React.Fragment >
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
                                                    <DemoButton onClick={(e) => Delete(e, index, data._id)}> {DeleteName}</DemoButton>
                                                </td>
                                            </React.Fragment>
                                        }

                                    </tr>
                                </React.Fragment>
                            })
                        }
                    </tbody>
                </table>
            </div >
        </ div >
    )
}

export default DemoTable





