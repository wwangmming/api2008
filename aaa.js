var mysql=require('mysql');//导入Mysql包

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'2008'
});
connection.connect();

var express=require('express');
var app=express();

app.use(express.static('public'));
var app=express();

app.use(express.status('public'));
//参数里为'/'则是默认打开页面
app.get('/',function(req,res){
    res.sendFile(_dirname+"/"+"index.html");
})


app.get('/login',function(req,res){
    var response={
        "account":req.query.account,
        "password":req.query.password,
    };
    var selectSQL="select account,password from user where account='"+req.query
    var addSqlParams=[req.query.account,req.query.password];

    connection.query(selectSQL,function(err,result){
        if(err){
            console.log('[login ERROR] -',err.message);
            return;
        }
        //console.log(result)
        if(result==''){
            console.log("账户密码错误");
            res.end("0")//如果登录失败就给客户端返回0       
         }else{
             console.log("OK");
             res.end("1");//如果登录成功就给客户端返回1
         }
    });
    console.log(response);

})

app.get('/register.html',function(req,res){
    res.sendFile(_dirname+"/"+"register.html");
})


//注册模块
var addSql='INSERT INIO user(account,password,name)VALUES(?,?,?)';

app.get('./process_get',function(req,res){
    //输出JSON格式
    var response={
        "account":req.query.account,
        "password":req.query.password,
        "name":
    }
})
