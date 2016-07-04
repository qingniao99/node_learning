var koa = require('koa');
var app = koa();

// x-response-time

app.use(function *(next){
    var start = new Date;
    console.log(55555);
    yield next;
    console.log(88888);
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
    var start = new Date;
    console.log(66666);
    yield next;
    console.log(77777);
    var ms = new Date - start;
    console.log(this.method + this.url + ms);
});

// response

app.use(function *(){
    this.body = 'down-up-stream';
});

app.listen(2587);