var express = require('express');
var app = express();
var router = require('./server1-main.js')(app)

app.set('views', __dirname+'/views') //라우터의 ./server1-main에 의해 Index.html을 찾는데. 여기서 /views를 설정했으니까 여기서 찾음.
app.set('view engine','ejs')//rend할때 view엔진. ejs가 요리해줌.
app.engine('html',require('ejs').renderFile)


app.listen(3000,()=>{
    console.log("웹 서버가 실행되었다. http://127.0.0.1:3000");
})
