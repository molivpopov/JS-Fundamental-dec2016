function solve(args) {
    
    // setup
    var n = +args[0];
    var IsPrim = false;
    var i;

    // action
    while (n >= 2 && !IsPrim) {
        i = 2;
        IsPrim = true;

        while (IsPrim && i <= n / 2) {
            IsPrim = n % i != 0;
            i += 1;
        }
        n -= 1;
    }

    console.log(n + 1);
}

solve(['13']);
solve(['126']);
solve(['26']);