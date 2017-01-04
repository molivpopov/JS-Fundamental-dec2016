function solve(args) {

    // Set Up
    var bigest = +args[0],
        current = +args[1];

    // Action
    if (current > bigest) {
        bigest = current;
    }

    current = +args[2];

    if (current > bigest) {
        bigest = current;
    }

    //Output
    console.log(bigest);
}

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '4']);
solve(['-1', '-0.5', '-5.1']);