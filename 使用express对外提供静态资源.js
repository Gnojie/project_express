// 导入express
const express = require('express')

// 创建web服务器
const app = express()

// 调用express.static()方法  为外界提供静态资源
app.use('/test1',express.static('./clock'))


// 启动web服务器 
app.listen(8081,()=>{
    console.log('express runing successfully at http://127.0.0.1:8081')
})