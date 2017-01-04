function solve(args) {

    // set up
    var a = +args[0],
        b = +args[1],
        c = +args[2];
    var resultToPrint;

    // Action
    var d = b * b - 4 * a * c;

    if (d < 0) {
        resultToPrint = ('no real roots');
    };

    if (d === 0) {
        var r = -(b / 2 / a);
        resultToPrint = ('x1=x2=' + r.toFixed(2));
    };

    if (d > 0) {
        var r1 = (Math.sqrt(d) - b) / 2 / a,
            r2 = (-Math.sqrt(d) - b) / 2 / a;

        // set r1 be the bigest root
        if (r1 > r2) {
            var tmp = r1;
            r1 = r2;
            r2 = tmp;
        }
        resultToPrint = ('x1=' + r1.toFixed(2) + '; x2=' + r2.toFixed(2));
    }
    // output
    console.log(resultToPrint);
}

solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);