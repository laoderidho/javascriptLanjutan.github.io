'use strict';

module.exports = app=>{
    let myJson = require('./controller/controller');

    app.route('/')
        .get(myJson.index);
    app.route('/tampil')
        .get(myJson.ViewMhs);
    app.route('/tampil/:id')
        .get(myJson.getIdMhs)
    app.route('/tambahMhs')
        .post(myJson.postMhs);
    app.route('/hapus')
        .delete(myJson.deleteMhs);
}