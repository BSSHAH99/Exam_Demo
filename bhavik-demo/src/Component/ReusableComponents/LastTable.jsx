// import React from 'react'

// const LastTable = ({ data, DetailName, Detail, Edit, EditName, Delete, DeleteName, ...props }) => {
//     let keys = data && Array.isArray(data) ? Object.keys(data[0] || {}) : [];
//     return (
//         <div>
//             <table border="1">
//                 <thead>
//                     <tr>

//                         {keys?.map((key, i) => {
//                             return <th key={i}>{key}</th>;
//                         })}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data?.length > 0 &&
//                         data.map((value, index) => {
//                             return (
//                                 <tr key={index}>
//                                     {(
//                                         <td>{index + 1}</td>
//                                     )}
//                                     {keys.map((key, i) => {
//                                         return (
//                                             // value[key]===undefined ? null:
//                                             <React.Fragment key={i}>
//                                                 {Array.isArray(value[key]) ? (
//                                                     window.location.pathname === "/view-exam" ||
//                                                         window.location.pathname === "/all-exam" ||
//                                                         window.location.pathname === "/preview-exam" ? (
//                                                         // typeof Object.values(value[key])[0]==="object"? <>{value[key].length>0 &&(<Table data={value[key]}/>)}</>:  <td>{`${value[key]}`}</td>
//                                                         <td>{`${value[key]}`}</td>
//                                                     ) : (
//                                                         <>
//                                                             {value[key].length > 0 && (
//                                                                 <LastTable data={value[key]} />
//                                                             )}
//                                                         </>
//                                                     )
//                                                 ) : (
//                                                     <td>{value[key]}</td>
//                                                 )}
//                                             </React.Fragment>
//                                         );
//                                     })}




//                                 </tr>
//                             );
//                         })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default LastTable
