// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()

// 4.定义一个最简单的中间件函数
const mw = function(req,res,next) {
    console.log('最简单的中间件函数')
    // 获取到达服务器的时间
    const time = Date.now()
    // 为req对象挂载自定义属性  从而把时间共享给所有路由
    req.time = time
    // 把流转关系转接给下一个中间件  或  路由
    next()
}

// 5.将mw注册为全局生效的中间件函数
app.use(mw)

app.get('/',(req,res)=>{
    res.send(''+req.time)
})

// 3.启动web服务器  如果端口号是80则可以省略
app.listen(8080,()=>{
    console.log('running at http://127.0.0.1:8080')
})