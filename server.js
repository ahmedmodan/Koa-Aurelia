const koa = require('koa');
// const serve = require('koa-static');
const koaRouter = require('koa-router');
// const historyApiFallback = require('koa-connect-history-api-fallback');
const generators = require('./server/generators/generatorExports');

generators.iterator();
generators.alphabet();
generators.errorTest();

const router = koaRouter();
const app = koa();

router.get('/homepage/test', function* () {
  this.body = 'This is the home page!';
});

router.get('/secret', function* () {
  this.body = 'This is the secret page!';
});

router.get('/app', function* () {
  this.body = 'Hello Node Server!';
});

router.get('/end/point', function* () {
  this.body = 'Hello Node Server!';
});

// app.use(historyApiFallback());
// app.use(serve(`${__dirname}/public`));
app.use(router.routes());

app.listen(3000);
console.log('Koa listening on port 3000');
