import koa from 'Koa';
import generators from './server/generators/generatorExports';


const app = koa();

app.use(function *() {
  this.body = 'hello world';
});

generators.iterator();
generators.alphabet();
generators.errorTest();

app.listen(process.env.PORT || 3000);
console.log('Koa listening on port 3000');
