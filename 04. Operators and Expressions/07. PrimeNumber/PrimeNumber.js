function solve(args) {
    // set up
    var n = +args[0];
    var IsPrim = n > 1;
    var i = 2;

    // Action
    while (IsPrim & i <= n / 2) {
        IsPrim = n % i != 0;
        i += 1;
    }

    //output result
    console.log(IsPrim);
}

solve(['2']);
solve(['23']);
solve(['-3']);
solve(['0']);
solve(['1']);
solve(['17']);
solve(['99']);