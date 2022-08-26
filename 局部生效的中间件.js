// 导入express
const express = require('express')
// 创建web服务器
const app = express()


// 1.定义中间件函数
const mw1 = function(req,res,next){
    console.log("定义局部中间件");
    next()
}

// 2.创建路由  局部中间件函数只在当前路由生效
app.get('/',mw1,(req,res)=>{
    res.send('test')
})

// 3.创建不含局部生效中间件的路由
app.get('/user',(req,res)=>{
    res.send('test2')
})



// 启动web服务器  如果端口号是80则可以省略
app.listen(8080,()=>{
    console.log('running at http://127.0.0.1:8080')
})