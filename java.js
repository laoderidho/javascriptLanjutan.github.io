 //konsep this pada arrow function
        /* arrow function sebenarnya tidak bisa memakai konsep this tetapi berbeda jika kita ingin memanggil 
        */
        // const Mahasiswa = function(){
        //     this.nama = 'Ridho';
        //     this.jurusan = 'Teknik Informatika';
        //     this.umur = 12;
        //     this.Hello = () => console.log(`Hello ${this.nama} jurusan ${this.jurusan}`);

        //     setInterval(()=>{
        //         console.log(this.umur++)
        //     }, 500);
        // }

        // const Ridho = new Mahasiswa();

        const box = document.querySelector('.box');

        box.addEventListener('click', function(){
            this
        });