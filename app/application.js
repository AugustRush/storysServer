var Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const router = require('./routes/index');
const cors = require('koa2-cors');
const app = new Koa();

const bparser = new BodyParser();

// 处理跨域的配置
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

app.use(bparser);

app.use(router.routes());

app.listen(3000);