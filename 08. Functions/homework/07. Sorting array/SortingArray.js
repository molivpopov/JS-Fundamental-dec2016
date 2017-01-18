function solve(args) {

    var nmb = args[1]
        .split(' ')
        .map(Number)
        .sort(function(a, b){return a-b});

    console.log(nmb.join(' '));
}

solve(['6', '-26 -25 -28 31 2 27']);