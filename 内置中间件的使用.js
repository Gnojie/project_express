// 1.导入express
const express = require('express')
// 2.创建web服务器
const app = express()

// 通过express.json() 中间件 解析表单中json格式的数据
app.use(express.json())

// 通过express.urlencoded()  中间件 解析表单中url-encoded格式的数据
app.use(express.urlencoded({extended : false}))


app.post('/user',(req,res)=>{
    // 可以通过req.body  接受客户端发送过来的请求体数据  包括json和 url-encoded
    // 默认情况下  不配置解析表单数据得中间件 则 req.body 默认为 undefined
    
    console.log(req.body)
    res.send('running successfully')

})
 
app.post('/book',(req,res)=>{
    console.log(req.body);
    res.send('running successfully') 
})

// 3.启动web服务器  如果端口号是80则可以省略
app.listen(8080,()=>{
    console.log('running at http://127.0.0.1:8080')
})