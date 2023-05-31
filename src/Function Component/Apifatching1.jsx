import React, { Component, useEffect, useState } from "react";

const Apifatching1 = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((resp) => {
                setdata(resp)
            })
        })
    }, []);
    console.log(data);
    return (
        <>
            <div>
                <h1>Fetch api data</h1>
                <table border="2" width="90%">
                    <tr>
                        <td>userid</td>
                        <td>id</td>
                        <td>title</td>
                        <td>completed</td>
                    </tr>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed.toString()}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </>
    )
};
export default Apifatching1;