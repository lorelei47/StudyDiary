const mysql = require('mysql')
const ct = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'metro_data'
})

ct.connect(function(){
    console.log('连接成功');
})

ct.query('select * from city',function(errer,result,field){
    if(errer) throw errer
    console.log('query result:'+JSON.stringify(result));
})