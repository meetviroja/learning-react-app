import React, { useState } from "react";


const Usestate1 = () => {

    let data = "meet"
    const [statedata, setStatedata] = useState("something")
    let btnclick = () => {
        data = harsh
    }
    return (
        <>
            my name is : {data}
            statedata : {setStatedata}


            <button onClick={btnclick}> click</button>
        </>
    );
}

export default Usestate1;