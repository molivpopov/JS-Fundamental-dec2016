function solve(args) {
    // set up
    var n = +args[0];

    // Action
    var m = n / 100;
    var thirdDigit = parseInt(m % 10);
    var res = thirdDigit === 7 ? "true " : "false " + thirdDigit;

    //output result
    console.log(res);
}

solve(['5']);
solve(['701']);
solve(['9703']);
solve(['877']);
solve(['777877']);
solve(['9999799']);
solve(['99']);