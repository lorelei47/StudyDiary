/***1.express使用***/
//-------------------
const express = require('express')
const app = express()

app.get('/',(req,res)=>res.send('hello world'))
app.listen(3000,()=>console.log('启动成功！'))

/***2.use()的用法***/
//------------------
app.use(path,callback)//中的callback既可以是router对象又可以是函数
//比如，我们需要访问两个不同的路由地址：/home/index、/home/login
//先定义一个router.js的路由模块
var express = require('express')
var router = express.Router()
router.get("/",(req,res)=>{
    res.send("/")
})
router.get("/index",(req,res)=>{
    res.send("index")
})
router.get("/login",(req,res)=>{
    res.send("login")
})
module.exports = router;
//在app.js中引进
var router = require("./router")
app.use('/home',router)

//use():当路径有多个不同的子路由时，可以用use()作为总路由的配置,而具体到最后一层，譬如/home/index中的index后面没有子路由时，则使用对应get()或者post();

//使用静态资源
app.use(express.static('public'));//直接在根路由http://127.0.0.1:3000后面接public路径的静态资源即可
//例如：http://localhost:3000/images/08.jpg
app.use('/static', express.static('public'))//则以/static作为路由地址，一般采用与目录名相同
//如：http:// localhost:3000/static/image/kitten.jpg

/**3.**/