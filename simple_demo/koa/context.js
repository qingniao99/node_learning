var koa = require('koa')

var app = koa();

//request：指向Request对象
//response：指向Response对象
//req：指向Node的request对象
//res：指向Node的response对象
//app：指向App对象
//state：用于在中间件传递信息。
//throw()：抛出错误，直接决定了HTTP回应的状态码。
//assert()：如果一个表达式为false，则抛出一个错误。

app.use(function *(next){
    console.log(this.request);
    console.log(this.response);
    console.log(this.req);
    console.log(this.res);
    console.log(this.app);
    console.log(this.state);
    yield next;
});

app.listen(2587);

