// npm from 
import express from 'express'; 
import nunjucks from 'nunjucks'; //nunjucks가져오기  0420
const app = express(); //express 선언

// port 설정
const port = 3000;

// js from 
import citycode from './js_modules/citycode.js';
import test from './js_modules/test.js';

// set nunjucks
app.set('view engine', 'html'); // 확장자를 html 로도 사용이 가능함.

nunjucks.configure('views', { // views폴더가 넌적스파일의 위치가 됨
  express: app,
  watch: true,
});


// set express
app.get('/',(request, response)=>{
    // 응답.send("헬로~") //view engine 

    // response.send(console.log(test));

    // response.send(test); //이런식으로 html을 조작할 수 있음. 
    response.render('index',{
        title : test,
    })

});


// node server check
app.listen(port,()=>{
    console.log(`server start port : ${port}`);
});