function solve(args) {
    // Set Up
    let a = +args[0],
        b = +args[1],
        c = +args[2];

    // Action
    let min = Math.min(a, b, c),
        max = Math.max(a, b, c),
        middle = a + b + c - min - max;

    // Output
    console.log(max + ' ' + middle + ' ' + min);
}

solve(['5', '2', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '4']);
solve(['-1', '-0.5', '-5.1']);