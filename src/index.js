module.exports = function toReadable (num) {
    let numOnes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numString = num.toString();

    if (num === 0) {
        return 'zero';
    }

    if (num < 20) {
        return numOnes[num];
    }

    if (numString.length === 2) {
        return (numTens[numString[0]] + ' ' + numOnes[numString[1]]).trim();
    }

    if (numString.length === 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return numOnes[numString[0]] + ' hundred';
        else
            return numOnes[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
    }
}
