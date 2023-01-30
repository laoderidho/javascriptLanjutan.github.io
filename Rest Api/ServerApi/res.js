'use strict';

exports.ok = (values, res)=>{
    let data ={
        'status': 200,
        'Data': values,
    };

     res.json(data);
     res.end();
}