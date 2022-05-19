var Koa = require('koa');
// const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const router = require('./routes/index');
const app = new Koa();

const bparser = new BodyParser();

app.use(bparser);

app.use(router.routes());

app.listen(3000);