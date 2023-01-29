'use strict';

let response = require('../res');
let connection = require('../connect');

exports.index = (req, res)=>{
    response.ok('aplication run now', res)
};