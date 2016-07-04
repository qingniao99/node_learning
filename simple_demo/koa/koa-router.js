var koa = require('koa');
var app = koa();
var router = require("koa-router");

var myRouter = new router();//get post put del patch

myRouter.get('/', function *(next) {
    this.response.body = 'Hello Home!';
});

myRouter.get("user", "/users/:id", function *(next) {
    console.log("users");
    this.response.body = 'Hello router1!';
});

console.log(myRouter.url('user', 666));
console.log(myRouter.url('user', {id: 666}));

myRouter.get('/:book/:mark/:quna', function *(next) {
    console.log(this.params);
    this.response.body = this.params.book + "," + this.params.mark + "," + this.params.quna;
});

myRouter.get('/userss/:user', function *(next) {
    this.body = this.user;
}).param('user', function *(id, next) {
    var users = ['0号用户', '1号用户', '2号用户'];
    console.log(id);
    this.user = users[id];
    if (!this.user) return this.status = 404;
});

//myRouter.redirect('/login', 'sign-in');redirect方法的第一个参数是请求来源，第二个参数是目的地，两者都可以用路径模式的别名代替

app.use(myRouter.routes());

app.listen(2587);
