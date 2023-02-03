import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditMahasiswa = () => {
    const [Nama, setNama] = useState('')
    const [Nim, setNim] = useState('')
    const [Jurusan, setJurusan] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
      getMahasiswaById();
    },[])

    const UpdateMahasiswa = async e=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:3100/update/${id}`, {
                Nama, Nim, Jurusan
            })
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

    const getMahasiswaById = async (e)=>{
      const response = await axios.get(`http://localhost:3100/tampil/${id}`)
       setNama(response.data.data[0].Nama)
       setNim(response.data.data[0].Nim)
       setJurusan(response.data.data[0].Jurusan)
    }

   

  return (
    <div className='container'>

        <form onSubmit={UpdateMahasiswa}>
       
            <div className='mb-3'>
                <label for="" className='form-label'>Nama Mahasiswa</label>
              <input type="text" className='form-control' value={Nama} onChange={e=>setNama(e.target.value)} placeholder="masukkan nama anda"/>
            </div>
            <div className='mb-3'>
                <label for="" className='form-label'>Nim Mahasiswa</label>
                <input type="text" className='form-control' value={Nim} onChange={e=>setNim(e.target.value)} placeholder="masukkan Nim Anda anda"/>        
            </div>
            <div className='mb-3'>
                <label for="" className='form-label'></label>
                <select className='form-select' value={Jurusan} onChange={e=>setJurusan(e.target.value)}>
                    <option value="Teknik Informatika">Teknik Informatika</option>
                    <option value="Sistem Informasi">Sistem Informasi</option>
                    <option value="Teknik Komputer">Teknik Komputer</option>
                </select>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        
    </div>
  )
}

export default EditMahasiswa
