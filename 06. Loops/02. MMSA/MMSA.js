function solve(args) {

    // Set Up
    var max = Number.NEGATIVE_INFINITY,
        min = Number.MAX_VALUE,
        sum = 0;
    var current;

    // Action
    for (index in args) {
        current = +args[index];
        if (max < current) { max = current };
        if (min > current) { min = current };
        sum += current;
    }

    // Output
    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + (sum / args.length).toFixed(2));

}

solve(['2', '5', '1']);
solve(['2', '-1', '4']);
solve(['3']);