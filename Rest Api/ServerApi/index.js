const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3100;
let route = require('./route')

//parse aplication 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//get route 
route(app)

app.get('/', (req, res)=>{
    res.send('Hello Ridho')
})

 app.listen(port, ()=>{
    console.log(`server start on port ${port}`)
 });