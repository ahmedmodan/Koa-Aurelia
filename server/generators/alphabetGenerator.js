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

export default () => setTimeout(stopLog, 8400);
