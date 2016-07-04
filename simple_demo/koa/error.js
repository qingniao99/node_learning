var app = require('koa')();

app.use(function *(next){
    console.log(666666);
    yield next;
});

app.use(function *() {
    try {
        yield saveResults();
    } catch (err) {
        this.throw(400, '数据无效');
    }
});

//this.throw('name required', 400);
//this.throw(400, 'name required');
// this.throw方法的两个参数，一个是错误码，另一个是报错信息。如果省略状态码，默认是500错误。

app.on('error', function(err, ctx){
    log.error('server error', err, ctx);
});

app.listen(2587);

