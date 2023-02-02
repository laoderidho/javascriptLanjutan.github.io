import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Mahasiswa = () => {
    const [students, setStudents] = useState([])

    useEffect(()=>{
        getMahasiswa();
    }, [])

    const getMahasiswa = async ()=>{
       const response = await axios.get('http://localhost:3100/tampil')
       setStudents(response.data.data)
      //console.log(response.data.data)
    }

  return (
    <div className='container'>
      <h1>Table Mahasiswa</h1>
      <a href="/add" className='btn btn-primary'><i className='fa-solid fa-plus'></i> Tambah Mahasiswa</a>
      <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nama</th>
                    <th>Nim</th>
                    <th>Jurusan</th>
                </tr>
            </thead>
            <tbody>
              {students.map((student, index)=>(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.Nama}</td>
                    <td>{student.Nim}</td>
                    <td>{student.Jurusan}</td>
                    <td><button className='btn btn-success'> <i className='fa-solid fa-pen-to-square'></i>Edit</button></td>
                    <td><button className='btn btn-danger'> <i className='fa-solid fa-trash'></i> Hapus</button></td>
                </tr>
              ))}
            </tbody>
      </table>
    </div>
  )
}

export default Mahasiswa
