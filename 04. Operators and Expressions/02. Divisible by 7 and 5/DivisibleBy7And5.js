function solve(args) {
    // set up
    var n = +args[0];

    // Action
    var res = n % 5 === 0 & n % 7 === 0 ? "true " : "false ";

    //output result
    console.log(res + n);
}

solve(['5']);
solve(['7']);
solve(['-2']);
solve(['35']);
solve(['42']);
solve(['17']);
solve(['99']);