module.exports = function toReadable (number) {
  const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
               'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const b = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  return (number < 20)? a[number]:
  (number < 100)? b[Math.floor(number / 10)] + ((number % 10 === 0) ? '' : ' ' + a[number % 10]):
   a[Math.floor(number / 100)] + ' hundred' + ((number % 100 === 0) ? '' : ' ' + toReadable([number % 100]));
}
