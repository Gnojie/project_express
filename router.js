const express = require('express')

// 创建路由对象
const router = express.Router()

// 挂载具体的路由
router.get('/user/list',(req,res)=>{
    res.send('成功导出')
})

router.post('/user/add',(req,res)=>{
    res.send('成功导入')
})

// 导出路由
module.exports = router 