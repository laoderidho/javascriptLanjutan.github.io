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
                </tr>
              ))}
            </tbody>
      </table>
    </div>
  )
}

export default Mahasiswa
