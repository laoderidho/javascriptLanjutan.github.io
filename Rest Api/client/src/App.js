import React from 'react'
import Mahasiswa from './components/Mahasiswa/Mahasiswa'
import AddMahasiswa from './components/Mahasiswa/AddMahasiswa'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mahasiswa/>} />
          <Route path='/add' element={<AddMahasiswa/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App