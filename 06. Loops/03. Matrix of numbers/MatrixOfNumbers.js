function solve(args) {

    // Set Up
    var n = +args[0];
    var line = new Array();

    // Action
    for (var j = 1; j <= n; j += 1) {

        for (var i = 0; i < n; i += 1) {
            line[i] = i + j;
        }

        // output
        console.log(line.join(" "));
    }
}

solve(['5']);
//solve(['3']);