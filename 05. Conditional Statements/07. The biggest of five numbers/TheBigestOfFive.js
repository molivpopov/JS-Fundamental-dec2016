function solve(args) {

    // Set Up
    var bigest = +args[0];
    var current;

    // Action
    for (var index = 1; index < 5; index += 1) {
        
        current = +args[index];

        if (bigest < current) {
            bigest = current;
        }
    }

    // Output
    console.log(bigest);
}

solve(['5', '2', '2', '4', '1']);
solve(['-2', '-22', '1', '0', '0']);
solve(['-2', '4', '3', '2', '0']);