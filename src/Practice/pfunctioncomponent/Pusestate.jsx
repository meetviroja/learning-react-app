import React, { useState } from "react";


const Pusestate = () => {
    let data = "something"
    const [statedata, setStatedata] = useState("something")
    let btnclick = () => {
        data = "chaking"
        setStatedata(data)

    }
    return (
        <>
            simple variable data : {data}
            <br />
            statedata : {statedata}
            <br />
            <button onClick={btnclick}>click</button>
            <br />
            <br />
            <br />
            <br />
            <br />

        </>
    );
}

export default Pusestate;