var koa = require('koa');
const app = new koa();

app.use(async (ctx, next) => {
    console.log(ctx);
    // ctx.response.type = "plain/html";
    ctx.response.body = "hello, august rush";
});

app.listen(3000);