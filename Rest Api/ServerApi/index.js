const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3100;
let route = require('./route')


//parse aplication 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//cors
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PACTH, PUT,  DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})


//get route 
route(app)



app.get('/', (req, res)=>{
    res.send('Hello Ridho')
})

 app.listen(port, ()=>{
    console.log(`server start on port ${port}`)
 });