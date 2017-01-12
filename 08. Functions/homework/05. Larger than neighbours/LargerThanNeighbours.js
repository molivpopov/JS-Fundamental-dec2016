function solve(params) {

    //var n = +params[0];
    var maxi = 0;
    params = params[0].split('\n');
    var nmb = params[1].split(' ').map(x => +x);

    var max = function GetMax(n1, n2, n3) {
        return (n2 > n1 && n2 > n3);
    };

    for (var i = 1; i < nmb.length - 1; i += 1) {
        if (max(nmb[i - 1], nmb[i], nmb[i + 1])) {
            maxi += 1;
        }
    }
    console.log(maxi);
}

solve(['6', '-26 -25 -28 31 2 27']);