//  导入express
const express = require('express')
// 导入路由模块
const router = require('./router')

// 创建服务器
const app = express()

// 注册路由
app.use('/api',router)

// 启动服务器
app.listen(8080,()=>{
    console.log('runing at http://127.0.0.1:8080');
})