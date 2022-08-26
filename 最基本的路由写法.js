const express = require('express')

// 创建服务器
const app = express()

// 挂载路由
app.get('/user',(req,res)=>{
    res.send({name : 'zs', age : 15})
})

app.listen(8080,()=>{
    console.log('running at http://127.0.0.1:8080');
})