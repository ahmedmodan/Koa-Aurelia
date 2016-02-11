import koa from 'Koa';

const app = koa();

app.use(function *() {
  this.body = 'hello world';
});

// THE FOLLOWING LINES WILL ITERATE OVER THE print10 FUNCTION AND LOG THE YIELDS TO THE CONSOLE
// IT WILL ALSO YIELD CONTROL TO ANOTHER GENERATOR FUNCTION THAT WILL LOG THE NUMBERS BETWEEN
// 5 AND 6 IN STEPS OF .1

function *printSteps() {
  yield 5.1;
  yield 5.2;
  yield 5.3;
  yield 5.4;
  yield 5.5;
  yield 5.6;
  yield 5.7;
  yield 5.8;
  yield 5.9;
}

function *print10() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield *printSteps();
  yield 6;
  yield 7;
  yield 8;
  yield 9;
  yield 10;
}

for (let num of print10()) {
  console.log(num);
}

// THE FOLLOWING LINES WILL PRINT AN ALPHABET TO THE CONSOLE.

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function *printAlphabet(str) {
  let index = 0;
  while (true) {
    let current = str[index];
    yield current;
    index++;
    if (index === 26) {
      index = 0;
      yield `\n the alphabet: ${str}! \n`;
    }
  }
}

let printedAlphabet = printAlphabet(alphabet);

function logAlphabet() {
  console.log(printedAlphabet.next().value);
}

let logID = setInterval(logAlphabet, 300);

function stopLog() {
  clearInterval(logID);
}

setTimeout(stopLog, 8400);


// THE FOLLOWING LINES WILL CAUSE A GENERATOR TO THROW AN ERROR AND LOG IT TO THE CONSOLE

function *sum(val1) {
  while (true) {
    let val2 = yield val1;
    val2.toUpperCase();
    let final = yield val1 + val2;
    return final + val2 + val1;
  }
}

let summed = sum('hello');

try {
  summed.next();
  summed.next(77);
  summed.next(42);
} catch (error) {
  console.log('this is the error', error);
}





app.listen(process.env.PORT || 3000);
console.log('Koa listening on port 3000');
