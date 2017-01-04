function solve(args) {
    //Set Up
    var sign = '0';
    var a = +args[0],
        b = +args[1],
        c = +args[2];

    //Action
    var res = a * b * c;

    if (res > 0) {
        sign = '+';
    }
    if (res < 0) {
        sign = '-';
    }

    // output
    console.log(sign);
}

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '4']);
solve(['-1', '-0.5', '-5.1']);
