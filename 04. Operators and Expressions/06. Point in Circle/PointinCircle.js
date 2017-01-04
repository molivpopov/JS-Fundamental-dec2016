function solve(args) {
    // set up
    var x = +args[0];
    var y = +args[1];



    // Action
    var distance = Math.sqrt(x * x + y * y);
    var res = distance <= 2 ? "yes " : "no "

    //output result
    console.log(res + distance.toFixed(2));
}

solve(['-2', '0']);
solve(['-1', '2']);
solve(['1.5', '-1']);
solve(['-1.5', '-1.5']);
solve(['100', '-30']);
solve(['0', '0']);
solve(['0.2', '-0.8']);
solve(['0.9', '-1.93']);