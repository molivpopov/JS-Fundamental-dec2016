function solve(args) {
    // set up
    var n = +args[0];

    // Action
    var m = n >> 3;

    var thirdDigit = m % 2;

    //output result
    console.log(thirdDigit);
}

solve(['15']);
solve(['1024']);