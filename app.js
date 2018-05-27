const path = require('path');
const Koa = require('koa');
const logger = require('koa-logger');
const session = require('koa-session');
const koaBody = require('koa-body');
// const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const send = require('koa-send');
const views = require('koa-views');

const config = require('./config');
const mongodb = require('./database/mongodb');
const response = require('./middlewares/response');
const router = require('./routes/router')

const app = new Koa();

app.use(logger());

app.use(static(
    path.join(__dirname, './public')
));

// app.use(bodyParser());
app.use(koaBody({ multipart: true }));

// app.keys = [config.sessionKey];
// app.use(session({}, app));

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

app.use(response.restify());

app.use(router.routes()).use(router.allowedMethods())

app.use(async (ctx) => {
  await send(ctx, './public/index.html');
});

module.exports = app;
