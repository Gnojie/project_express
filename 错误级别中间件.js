// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()


// 定义路由
app.get('/',(req,res)=>{
    // 人为制造错误
    throw new Error('服务器内部发生了错误')
    res.send('home page')
})

// 定义错误级别中间件  捕获整个项目的异常错误  从而防止项目的崩溃
app.use((error,req,res,next)=>{
    console.log('发生了错误'+error.message)
    res.send(error.message)
})
// 错误级别中间件必须注册在所有路由之后


// 3.启动web服务器  如果端口号是80则可以省略
app.listen(8080,()=>{
    console.log('running at http://127.0.0.1:8080')
})