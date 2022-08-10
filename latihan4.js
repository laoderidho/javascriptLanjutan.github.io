
//looping
// const mhs = [
//     {
//         nama: 'Ridho',
//         jurusan :'Teknik Informatika'
//     },
//     {
//         nama: 'Salwa',
//         jurusan :'Pendidikan Agama Islam'
//     },
//     {
//         nama: 'Darmayanti Buton',
//         jurusan :'Pendidikan Agama Islam'
//     },
//     {
//         nama: 'Nurfitri Salini',
//         jurusan :'Teknik Industri'
//     },
//     {
//         nama: 'Andy Soewito',
//         jurusan :'Akutansi'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(e=> {
//     return `<h2 class=""> nama : ${e.nama}</h2>
//     <span class="">Jurusan : ${e.jurusan}</span>`
// }).join('')}
// </div>`

//condicional

// const lagu = {
//     judul : 'butiran debu',
//     penyanyi : 'yo nda tau',
//     feat : `rayi Putra`
// }
// const el = `<div class="">
// <ul class="">
// <li class=""> ${lagu.judul} </li>
// <li class=""> ${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''} </li>
// </ul>
// </div>`

//nested 
//HTML Fragments bersarang

const mhs ={
    nama : 'Ridho Fahreza',
    umur : 21,
    matKul : [
        'Pemrograman Web',
        'Pemrograman Berorientasi Object',
        'Pemrograman basis data',
        'Pemrograman bergerak',
        'Struktur data'
    ]
}

function cetakMataKuliah(matKul){
    return `<ol class="">
    ${matKul.map(mk=> `<li class="">${mk}</li>`).join(' ')}
    </ol>`
}

const el = `<div class="">
<h2 class="">${mhs.nama}</h2>
<span class="">Umur ${mhs.umur}</span>
<h4 class="">Mata Kuliah </h4>
    ${cetakMataKuliah(mhs.matKul)}
</div>`
document.body.innerHTML =`${el}`;
