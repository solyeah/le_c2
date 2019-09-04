//module.exports //외부에서 이 파일을 갖다 쓸 수 있게 함.
module.exports = (app)=>{
    app.get('/data',(req,res)=>{
        res.render('index.html')
    })
    app.get('/user',(req,res)=>{
        res.render('more.html')
    })
}