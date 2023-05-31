// import React, { useState } from 'react';
// // import Usestate from '../Function Component/Usestate';


// const toodoolist = () => {
//     const [item, setItem] = useState()
//     const [data, setData] = useState([])
//     const additem = (value) => {
//         setItem(value.target.value)
//     }
//     const click = () => {
//         setData(
//             (e) => {
//                 return ([...e, item])
//             }
//         )
//     }

//     return (
//         <>
//             <h1>you are in tudu list </h1>
//             <input type="text"
//                 value={item}
//                 onChange={additem} />
//             <button onClick={click}>add this</button>
//             {
//                 data.map(
//                     (m, index) => {
//                         return <li>{m}</li>
//                     }
//                 )
//             }
//         </>
//     );
// }

// export default toodoolist;