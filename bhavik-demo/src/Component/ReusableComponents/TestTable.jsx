import React from 'react'
import DemoButton from './DemoButton';

const TestTable = ({ tableData, th, DetailName, Detail, Edit, EditName, Delete, DeleteName, ...props }) => {
    // const th = new Set();
    // tableData.map((items) => {
    //     return Object.entries(items).map(([key]) => {
    //         key === "_id" || key === "__v" ? console.log("") : th.add(key);
    //     });
    // });

    console.log('tableheadings :>> ', th);

    return (
        < div className="container my-3" >
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {th ?
                                th.map((th, i) => {
                                    return (
                                        <th key={i} scope="col" >
                                            {th.toUpperCase()}
                                        </th>
                                    );
                                }) : null
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.length > 0 &&
                            tableData.map((data, index) => {
                                console.log('data :>> ', data);

                                return <React.Fragment key={index}>
                                    <tr>
                                        {th ?
                                            Array.from(th.values()).map((item, i) => {
                                                console.log('item :>==============> ', data[item]);
                                                let arr = []
                                                let test = []
                                                if ((typeof data[item] === "object" && !Array.isArray(data[item]))) {
                                                    arr[0] = data[item]
                                                }
                                                else {
                                                    arr = data[item]
                                                    console.log('else :>> ', arr);
                                                }
                                                return <React.Fragment key={i}>
                                                    {test.length ?
                                                        // console.log('tessdfgsdfgdsgfgfgt :>> ', test)
                                                        test[0].map((items, i) => {
                                                            console.log('items :>> ', items);
                                                            return (
                                                                <div key={i}>
                                                                    {i + 1}. {items}
                                                                </div>
                                                            )
                                                        })
                                                        : null}
                                                    {
                                                        (typeof arr === "object") && Array.isArray(arr) ?
                                                            <React.Fragment>
                                                                <TestTable th={th} tableData={arr} />
                                                            </React.Fragment> :

                                                            <React.Fragment>
                                                                <td key={i}>{arr}</td>
                                                            </React.Fragment>
                                                    }
                                                </React.Fragment>
                                            }) : null}
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

export default TestTable





