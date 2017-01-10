function solve(args) {

    // setup
    var res = '=';
    var fstr = args[0];
    var sstr = args[1];
    var n = fstr.length > sstr.length
        ? sstr.length
        : fstr.length;
    var i = 0;

    // action
    while (res === "=" && i < n) {
        if (fstr[i] > sstr[i]) {
            res = '>';
        }
        if (fstr[i] < sstr[i]) {
            res = '<';
        }
        i += 1;
    }

    if (res === '=') {
        if (fstr.length > sstr.length) {
            res = '>';
        }
        if (fstr.length < sstr.length) {
            res = '<'
        }
    }
    console.log(res);
}

solve(["hello", "hell"]);
solve(["hello", "hello"]);