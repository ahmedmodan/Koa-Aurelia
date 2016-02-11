
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

export default () => {
  for (let num of print10()) {
    console.log(num);
  }
};
