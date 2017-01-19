function solve(args) {
    //setup
    var poses = args.map(Number);
    var index = 1,
        step = 0;
    var sum = poses[1] % 2;

    // Action
    while (index < poses.length) {
        step = poses[index];
        if (step % 2 === 0) {
            sum += step;
            index += 2;
        } else {
            sum *= step;
            index += 1;
        };
        sum %= 1024;
    }

    console.log(sum);
}

solve([
    '10',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0'
]);
solve([
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
]);