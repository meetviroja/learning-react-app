import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        postId: '',
        id: '',
        name: '',
        email: '',
        body: ''
    });
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((result) => result.json())
            .then((resp) => {
                setData(resp);
            });
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleInsert = () => {
        setData([...data, formData]);
        setFormData({
            postId: '',
            id: '',
            name: '',
            email: '',
            body: ''
        });
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(data[index]);
    };

    const handleUpdate = () => {
        const updatedData = [...data];
        updatedData[editIndex] = formData;
        setData(updatedData);
        setEditIndex(null);
        setFormData({
            postId: '',
            id: '',
            name: '',
            email: '',
            body: ''
        });
    };

    const handleDelete = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };

    return (
        <>
            <h1>you are in home</h1>
            <table width="100%" border="1px solid black">
                <thead>
                    <tr>
                        <th>post id</th>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="postId"
                                placeholder="post id"
                                value={formData.postId}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="id"
                                placeholder="id"
                                value={formData.id}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="body"
                                placeholder="body"
                                value={formData.body}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            {editIndex !== null ? (
                                <button onClick={handleUpdate}>Update</button>
                            ) : (
                                <button onClick={handleInsert}>Insert</button>
                            )}
                        </td>
                    </tr>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.postId}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.body}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Home;
