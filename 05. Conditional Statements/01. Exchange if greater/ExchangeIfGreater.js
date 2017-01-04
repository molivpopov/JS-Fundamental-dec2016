function solve(args) {
    // set up
    var a = +args[0];
    var b = +args[1];



    // Action
    if (a > b) {
        var tmp = a;
        a = b;
        b = tmp;
    }

    //output result
    console.log(a + " " + b);
}

solve(['-2', '0']);
solve(['-1', '2']);
solve(['1.5', '-1']);
solve(['-1.5', '-1.5']);
solve(['100', '-30']);
solve(['0', '0']);
solve(['0.2', '-0.8']);
solve(['0.9', '-1.93']);