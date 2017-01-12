function solve(params) {

    var number = +params[0];
    number = number % 10;
    var nameDigit = ['zero','one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(nameDigit[number]);

}

solve(['petar']);