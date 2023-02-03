'use strict';

let response = require('../res');
let connection = require('../connect');

exports.index = (req, res)=>{
    response.ok('aplication run now', res)
};

//menampilkan data mahasiswa
exports.ViewMhs = (req, res)=>{
    connection.query('SELECT * FROM mahasiswa', (err, rows, fileds)=>{
        if(err){
            console.log(err)
        }else{
            response.ok(rows, res)
        }
    })
}

//menampilkan data berdasarkan id
exports.getIdMhs = (req, res)=>{
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, rows, fileds)=>{
        if(err){
            console.log(err)
        }else{
            response.ok(rows, res)
        }
    }
    )
}

//menambah data
exports.postMhs = (req, res)=>{
    let Nama = req.body.Nama;
    let Nim = req.body.Nim;
    let Jurusan = req.body.Jurusan;

    connection.query('INSERT INTO mahasiswa (Nama, Nim, Jurusan) VALUES (?,?,?)', [Nama, Nim, Jurusan], 
        (err, rows, fields)=>{
            if(err){
                console.log(err)
            }else{
                response.ok("berhasil menambahkan data", res)
            }
        })}


//mengupdate data 
exports.UpdateMhs = (req, res)=>{
    let id = req.params.id;
    let Nama = req.body.Nama;
    let Nim = req.body.Nim;
    let Jurusan = req.body.Jurusan;

    connection.query('UPDATE mahasiswa SET Nama =?, Nim =?, Jurusan=? WHERE id =?', [ Nama, Nim, Jurusan, id], 
        (err, rows, fields)=>{
            if(err) {
                console.log(err)
            }else{
                response.ok('berhasil ubah data', res)
            }
        }
    )
}


//menghapus data 
exports.deleteMhs = (req, res)=>{
    let id = req.body.id;
    connection.query('DELETE FROM mahasiswa WHERE id=?',[id], 
    (err, rows, fields)=>{
            if(err){
                console.log(err)
            }else{
                response.ok("berhasil Menghapus  data", res)
            }
        })
}