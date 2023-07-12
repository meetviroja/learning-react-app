import React, { useState } from 'react';
import "./Pcurdop.css"

const Curd2 = () => {
  const [name, setName] = useState("")
  const [alldata, setAlldata] = useState([])
  const [show, setShow] = useState(false)
  const [editindex, setEditindex] = useState(false)

  const handleadddata = () => {
    if (name.length !== 0) {
      setAlldata(newdata => [...newdata, name])
      setName('')
    }
  }
  const handledelet = (index) => {
    alldata.splice(index, 1)
    setAlldata([...alldata])
  } 
  const handleEdit = (i) => {
    setName(alldata[i])
    setShow(true)
    setEditindex(i)
  }
  const handleupdate = () => {
    alldata.splice(editindex, 1, name)
    setAlldata([...alldata])
    setShow(false)
    setName("")
  }
  return (
    <>
      <h1>Curd</h1>
      <div className='inputfild'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {!show ? <button onClick={handleadddata}>Add-data</button> :
          <button onClick={handleupdate}>update</button>}
      </div>
      {
        alldata.map((val, i) =>
          <div className='btn-fild'>
            <h1>{val}</h1>
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handledelet(i)}>delet</button>
          </div>
        )
      }
    </>
  );
}

export default Curd2;
