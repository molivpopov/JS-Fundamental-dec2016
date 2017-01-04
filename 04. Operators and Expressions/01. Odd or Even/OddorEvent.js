function solve(args) {
    // set up
    var n = +args[0];

    // Action
    var res = n % 2 === 0 ? "even " : "odd ";

    //output result
    console.log(res + n);
}

solve(['3']);
solve(['2']);
solve(['-2']);
solve(['0']);
solve(['1']);
solve(['17']);
solve(['99']);