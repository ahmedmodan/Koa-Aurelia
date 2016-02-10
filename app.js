import koa from 'Koa';

const app = koa();

app.use(function* () {
  this.body = 'hello world';
});

app.listen(3000);
console.log('koa server listening on port 3000');
