function solve(args) {

    // Set Up
    var n = +args[0];
    var res = "";

    // Action
    for (var index = 1; index < n; index += 1) {
        res += index.toString() + " ";
    }
    res += n.toString();

    // Output
    console.log(res);
}

solve(['5']);
solve(['1']);