const koa = require('koa');
const koaRouter = require('koa-router');
const generators = require('./server/generators/generatorExports');
// UNCOMMENT THE FOLLOWING LINES TO RUN WITHOUT NGINX
// const serve = require('koa-static');
// const historyApiFallback = require('koa-connect-history-api-fallback');

generators.iterator();
generators.alphabet();
generators.errorTest();

const router = koaRouter();
const app = koa();

router.get('/homepage', function* () {
  this.body = 'This is the home page!';
});

router.get('/secret', function* () {
  this.body = 'This is the secret page!';
});

router.get('/api/test', function* () {
  this.body = 'Hello Node Server!';
});

// UNCOMMENT THE FOLLOWING LINES TO RUN WITHOUT NGINX
// app.use(historyApiFallback());
// app.use(serve(`${__dirname}/public`));
app.use(router.routes());

app.listen(3008);
console.log('Koa listening on port 3008');
