const Router = require('koa-router');

const router = new Router({
    prefix: '/api'
});

router.get('/storys', async (ctx, next) => {
    console.log('request storys api');
    // ctx.set({
    //     "Access-Control-Allow-Origin": "*", // 指定请求域，* 就是所有域名都可访问，即跨域打开
    //     // "Content-Type": "application/json",
    //     // "Access-Control-Allow-Credentials": "true",
    //     // "Access-Control-Allow-Methods": "OPTIONS, GET, PUT, POST, DELETE",
    //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    //     // "X-Powered-By": "3.2.1",
    //     // "Content-Security-Policy": `script-src "self"` // 只允许页面`script`引入自身域名的地址
    // });
    ctx.response.type = 'html';
    ctx.response.body = '<text>storys</text>\n<button>user is august rush</button>';
    await next();
});

module.exports = router;