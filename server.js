const koa = require('Koa');
const serve = require('koa-static');
const koaRouter = require('koa-router');
const generators = require('./server/generators/generatorExports');

generators.iterator();
generators.alphabet();
generators.errorTest();

const router = koaRouter();
const app = koa();

router.get('/homepage', function *() {
  this.body = 'This is the home page!';
});

router.get('/secret', function *() {
  this.body = 'This is the secret page!';
});


app.use(serve(`${__dirname}`));
app.use(router.routes());

app.listen(process.env.PORT || 3000);
console.log('Koa listening on port 3000');
