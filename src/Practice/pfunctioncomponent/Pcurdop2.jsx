import React, { useState } from "react";

const Pcurdop2 = () => {
    const [Name, setName] = useState("")
    const [alldata, setalldata] = useState([])


    const adddata = () => {
        if (Name.length !== 0) {
            setalldata(newdata => [...newdata, Name])
            setName('')
        }
    }

    return (
        <>
            <input type="text" placeholder="drop your name" value={Name} onChange={(e) => setName(e.target.value)} />
            <button onClick={adddata}>add</button>

            {
                alldata.map((val, i) =>
                    <h1>{val}</h1>

                )
            }
        </>
    );
}

export default Pcurdop2;