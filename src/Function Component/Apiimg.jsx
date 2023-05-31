import React, { useEffect, useState } from "react";

const Apifatchigimg = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos	').then((result) => {
            result.json().then((resp) => {
                setdata(resp)
            })
        })


    }, []);
    return (
        <>
            <h1>api photos</h1>
            <table border="2px solid black" width="90%" className="border">
                <tr>
                    <td>albumId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>url</td>
                    <td>thumbnailUrl</td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.albumId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><img src={item.url} alt="harsh" /></td>
                            <td>{item.thumbnailUrl}</td>
                        </tr>
                    )
                }

            </table>
        </>
    )
}
export default Apifatchigimg;   