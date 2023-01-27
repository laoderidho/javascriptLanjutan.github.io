const getData = fetch('../source-code-rest-api/pizza.json')
                .then(res=>res.json())
                .then(res=> {
                    let menu = res.menu;
                    let data = ''
                    menu.forEach(getData=>
                        data+=`<div class="card">
                                <img src="../source-code-rest-api/img/pizza/${getData.gambar}" alt="">
                                <h1 class=>${getData.nama}</h1>
                                <p class="deskripsi">${getData.deskripsi}</p>
                                <br>
                                <h5>Harga Rp:${getData.harga}</h5>
                                <button class="submit">Pesan Sekarang</button>
                                <button class="keranjang"><i class="fa-solid fa-cart-shopping"></i> keranjang</button>
                            </div>`)
                        const card = document.getElementById('menu').innerHTML = data
})

