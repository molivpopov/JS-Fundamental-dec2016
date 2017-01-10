function solve(args) {

    // setup
    var n = +args[0];
    // arr contain list of all numbers
    var arr = [];
    var max = Number.NEGATIVE_INFINITY;
    var temp;
    var num = 0;

    // init arr with zero
    for (var i = 1; i <= n; i += 1) {
        arr[+args[i]] = 0;
    }

    // action
    for (var i = 1; i <= n; i += 1) {

        temp = (arr[+args[i]] += 1);

        if (max < temp) {
            max = temp;
            num = +args[i];
        }
    }

    console.log(num + ' (' + max + ' times)');
}

solve(['13', '10000', '1', '10000', '10000', '2', '3', '10000', '10000', '1', '2', '4', '9', '3']);