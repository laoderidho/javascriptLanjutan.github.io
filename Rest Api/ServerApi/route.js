'use strict';

module.exports = app=>{
    let myJson = require('./controller/controller');

    app.route('/')
        .get(myJson.index);
}