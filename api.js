const express = require('express')//引入模块

const app = express()//调用express
const port = 8080//服务运行的端口

app.get('/user',function(req,res){
    //向客户端响应数据
    res.send("欢迎")
})

app.get('/list',(req,res)=>{
    res.send("列表接口")
})

app.get('/', (req, res) => {

    const list = [
                {
                    userid:1001,
                    name:"wangming",
                    age:18
                },
                {
                    userid:1002,
                    name:"xiaozong",
                    age:17
                },
                {
                    userid:1003,
                    name:"songzhipeng",
                    age:18
                }
         ]
        //将数组转为JSON字符串

    res.send(JSON.stringify(list))

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})