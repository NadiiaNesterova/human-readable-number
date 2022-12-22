module.exports = function toReadable(number) {
  let numberStr = String(number);
  let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let c = ['ten', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let rem = number % 10;
  let rem2 = number % 100;
  let numRem = number - rem;
  let numRem2 = number - rem2;
  let s = rem2 - rem;

  return (number < 10)? a[number]:
  (number > 9 && number < 20)? b[number - 10]:
  (number > 19 && number < 100 && numberStr[numberStr.length - 1] === '0')? c[number / 10]:
  (number > 19 && number < 100 && numberStr[numberStr.length - 1] !== '0')? `${c[numRem / 10]} ${a[number - numRem]}`:
  (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] === '0' && numberStr[numberStr.length - 2] === '0')? `${a[numRem2 / 100]} hundred`:
  (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] !== '0' && numberStr[numberStr.length - 2] === '1')? `${a[numRem2 / 100]} hundred ${b[rem2 - 10]}`:
  (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] !== '0' && numberStr[numberStr.length - 2] !== '0')? `${a[numRem2 / 100]} hundred ${c[s / 10]} ${a[rem]}`:
  (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] !== '0' && numberStr[numberStr.length - 2] === '0')? `${a[numRem2 / 100]} hundred ${a[rem]}`:
  `${a[numRem2 / 100]} hundred ${c[s / 10]}`;
}
