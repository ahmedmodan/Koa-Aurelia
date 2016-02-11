import koa from 'Koa';
import koaRouter from 'koa-router';
import generators from './server/generators/generatorExports';

generators.iterator();
generators.alphabet();
generators.errorTest();

const router = koaRouter();
const app = koa();

router.get('/', function *() {
  this.body = 'This is the home page!';
});

router.get('/secret', function *() {
  this.body = 'This is the secret page!';
});

app.use(router.routes());

app.listen(process.env.PORT || 3000);
console.log('Koa listening on port 3000');
