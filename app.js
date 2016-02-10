import koa from 'Koa';

const app = koa();

app.use(function* () {
  this.body = 'hello world';
});


function* print10() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
  yield 8;
  yield 9;
  yield 10;
}

for (let num of print10()) {
  console.log(num);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function* printAlphabet(str) {
  let index = 0;
  while (true) {
    let current = str[index];
    yield current;
    index++;
    if (index === 26) {
      index = 0;
      yield '';
      yield `the alphabet: ${str}! \n`;
    }
  }
}

let printedAlphabet = printAlphabet(alphabet);

function logAlphabet() {
  console.log(printedAlphabet.next().value);
}

setInterval(logAlphabet, 300);


app.listen(3000);
