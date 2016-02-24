'use strict';
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


module.exports = () => {
  try {
    summed.next();
    summed.next(77);
    summed.next(42);
  } catch (error) {
    console.log('this is the error', error);
  }
};
