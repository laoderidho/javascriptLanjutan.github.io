import React from 'react'
import Mahasiswa from './components/Mahasiswa/Mahasiswa'
import AddMahasiswa from './components/Mahasiswa/AddMahasiswa'
import EditMahasiswa from './components/Mahasiswa/EditMahasiswa'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mahasiswa/>} />
          <Route path='/add' element={<AddMahasiswa/>}/>
          <Route path='/edit/:id' element={<EditMahasiswa/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App