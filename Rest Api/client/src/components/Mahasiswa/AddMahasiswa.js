import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddMahasiswa = () => {
    const [Nama, setNama] = useState('')
    const [Nim, setNim] = useState('')
    const [Jurusan, setJurusan] = useState('')
    const navigate = useNavigate();

    const saveMahasiswa = async e=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3100/tambahMhs', {
                Nama, Nim, Jurusan
            })
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='container'>
        <form onSubmit={saveMahasiswa}>
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

export default AddMahasiswa
