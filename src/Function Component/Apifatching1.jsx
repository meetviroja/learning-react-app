import React, { Component, useEffect, useState } from "react";

const Apifatching1 = () => {
    const [data, setdata] = useState([]);
    const [newItem, setNewItem] = useState({ userId: "", id: "", title: "", completed: false });
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((resp) => {
                setdata(resp);
            });
        });
    }, []);

    const handleAddItem = () => {
        setdata([...data, newItem]);
        setNewItem({ userId: "", id: "", title: "", completed: false });
    };

    const handleEditItem = (item) => {
        setEditItem(item);
        setNewItem({ userId: item.userId, id: item.id, title: item.title, completed: item.completed });
    };

    const handleUpdateItem = () => {
        const updatedData = data.map((item) => {
            if (item.id === editItem.id) {
                return newItem;
            }
            return item;
        });
        setdata(updatedData);
        setEditItem(null);
        setNewItem({ userId: "", id: "", title: "", completed: false });
    };

    const handleDeleteItem = (item) => {
        const updatedData = data.filter((i) => i.id !== item.id);
        setdata(updatedData);
    };

    console.log(data);

    return (
        <>
            <div>
                <h1>Fetch API data</h1>
                <table border="2" width="90%">
                    <tr>
                        <td>userid</td>
                        <td>id</td>
                        <td>title</td>
                        <td>completed</td>
                        <td>Actions</td>
                    </tr>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed.toString()}</td>
                            <td>
                                <button onClick={() => handleEditItem(item)}>Edit</button>
                                <button onClick={() => handleDeleteItem(item)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {editItem && (
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    value={newItem.userId}
                                    onChange={(e) => setNewItem({ ...newItem, userId: e.target.value })}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={newItem.id}
                                    onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={newItem.title}
                                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={newItem.completed}
                                    onChange={(e) => setNewItem({ ...newItem, completed: e.target.checked })}
                                />
                            </td>
                            <td>
                                <button onClick={handleUpdateItem}>Update</button>
                            </td>
                        </tr>
                    )}
                </table>
                {!editItem && (
                    <div>
                        <h2>Add New Item</h2>
                        <input
                            type="text"
                            placeholder="userId"
                            value={newItem.userId}
                            onChange={(e) => setNewItem({ ...newItem, userId: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="id"
                            value={newItem.id}
                            onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="title"
                            value={newItem.title}
                            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                        />
                        <input
                            type="checkbox"
                            checked={newItem.completed}
                            onChange={(e) => setNewItem({ ...newItem, completed: e.target.checked })}
                        />
                        <button onClick={handleAddItem}>Add</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Apifatching1;
