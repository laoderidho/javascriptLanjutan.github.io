let mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rest_api'
})

connection.connect(err=>{
    if(err) throw err;
    console.log('connect')
});

module.exports = connection;