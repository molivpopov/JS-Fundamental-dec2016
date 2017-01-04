function solve(args) {

    // Set Up
    var num = Math.abs(+args[0]) % 1000;

    var high = Math.floor(num / 100),
        midle = Math.floor((num % 100) / 10),
        low = num % 10;

    var res = "", hires = "", saus = "";

    var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    // Action
    if (num % 100 >= 1 && num % 100 < 20) {
        res = (numbers[num % 100]);
    }

    if (midle >= 2) {
        res = numbers[midle + 18];

        if (low > 0) {
            res += ' ' + numbers[low];
        }
    }

    if (high >= 1) {
        hires = numbers[high] + ' ' + 'hundred';

        if (midle != 0 | low != 0) {
            saus = ' and ';
        }
    }

    res = hires + saus + res;

    if (num === 0) {
        res = numbers[0];
    }
    // make first char Uppercase
    var k = res.charAt(0).toUpperCase();
    res = k + res.substring(1, res.length);

    // output
    console.log(res);
}

solve(['0']);
solve(['9']);
solve(['12']);
solve(['501']);