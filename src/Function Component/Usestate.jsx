import React, { useState } from "react";

const Usestate = () => {

    const [statedata, setData] = useState("something")
    const [count, setCount] = useState(0)
    let data = "something"
    let btnClick = () => {
        console.log("called");
        data = "Checking"
        console.log(data);
        setData("data")
    }
    let increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            simple variable data : {data}
            <br />
            State data : {statedata}
            <br />
            <button onClick={btnClick}>Click</button>
            <br />
            <h2>increment decrement</h2>
            <button onClick={increment}>increment</button>  {count} <button onClick={() => { setCount(count - 1) }}>decrement</button>
        </>
    );
}
export default Usestate