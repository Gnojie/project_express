// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()

// 4.监听客户端的get请求,并向客户端响应具体的内容
app.get('/user',(req,res)=>{
    // 调用express提供的res.send方法向客户端响应一个json对象
    res.send({name : 'zs',age : 20 ,gender: 'man'})

})

// 获取查询字符串
app.get('/',(req,res)=>{
    // req.query可以获取客户端发过来的查询参数  默认情况下req.query是一个空对象
    res.send(req.query)
})

// 匹配动态参数
app.get('/user/:id',(req,res)=>{
    // req.params是动态匹配到的URL参数  默认情况下是一个空对象
    res.send(req.params)
})

// 5.监听客户端的post请求,并向客户端响应具体的内容
app.post('/user',(req,res)=>{
    // 调用express提供的res.send方法向客户端响应一个字符串
    res.send('请求成功')
})

// 3.启动web服务器  如果端口号是80则可以省略
app.listen(8080,()=>{
    console.log('running at http://127.0.0.1:8080')
})