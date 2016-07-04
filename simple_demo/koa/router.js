var koa = require('koa')

var app = koa()

// normal route
app.use(function* (next) {
    console.log(this.request);
    console.log(this.path);
    console.log(this.response);
    if (this.path !== '/') {
        return yield next
    }

    this.body = 'hello home'
});

// /404 route
app.use(function* (next) {console.log("404?");
    if (this.path !== '/404') {
        return yield next;
    }

    this.body = 'page not found'
});

// /500 route
app.use(function* (next) {console.log("500?");
    if (this.path !== '/500') {
        return yield next;
    }

    this.body = 'internal server error'
});

app.listen(2587);