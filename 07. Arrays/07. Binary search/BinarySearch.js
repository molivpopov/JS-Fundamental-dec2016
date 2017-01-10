// to work correct, array must be sorted
function solve(args) {

    var x = +args[args.length - 1];
    var l = 1,
        r = +args[0];

    while (l <= r) {

        resIndex = Math.floor((l + r) / 2);
        var temp = +args[resIndex];

        // x is the number to find
        if (temp === x) {
            break;
        }
        if (temp < x) {
            l = resIndex + 1
        }
        else {
            r = resIndex - 1
        }
    }

    if (l > r) {
        resIndex = 0;
    }

    // if resIndex = -1 -> the input array dont contain the number x
    console.log(resIndex - 1);

}
solve(['1', '1', '1']);
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);
solve(['11', '1', '2', '4', '8', '31', '31', '31', '64', '77', '99', '100', '31']);