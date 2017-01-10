function solve(args) {

    // setup
    var n = +args[0];
    var sequance = 1;
    var previous = Number.NEGATIVE_INFINITY;
    var bestSequance = 0;
    
    // action
    for (var index = 1; index <= n; index += 1) {
        var current = +args[index];

        sequance = current > previous ? sequance += 1 : 1

        previous = current;

        if (bestSequance < sequance) {
            bestSequance = sequance;
        }

    }

    console.log(bestSequance);
}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);