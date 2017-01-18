function solve(args) {

    // setup
    var nmb = args[1].split(' ').map(Number);
    // this function return true
    // if middle number is greter than two neighbours
    var isPeak = function IsPeak(n1, n2, n3) {
        return (n2 > n1 && n2 > n3);
    };
    var n = nmb.length;

    //action
    for (var i = 1; i < n - 1; i += 1) {

        if (isPeak(nmb[i - 1], nmb[i], nmb[i + 1])) {

            return i;
         }
    }
    return -1;
}

solve(['6', '-26 -25 -28 31 2 27']);