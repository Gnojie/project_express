// 1.导入express
const express = require('express')
// 导入body-parser
const body_parser = require('body-parser')
// 2.创建web服务器
const app = express()

// 注册中间件
app.use(body_parser.urlencoded({extended : false}))


app.post('/book',(req,res)=>{
    // 如果没有配置解析表单数据的中间件  则req.body  默认值为  undefined
    console.log(req.body)
    res.send('running successfully')
})

// 3.启动web服务器  如果端口号是80则可以省略
app.listen(8080,()=>{
    console.log('running at http://127.0.0.1:8080')
})