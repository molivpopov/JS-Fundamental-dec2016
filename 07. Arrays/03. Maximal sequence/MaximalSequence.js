function solve(args) {
    // setup
    var n = +args[0];
    var temp = +args[1];
    var num = 1;
    var max = 0;

    //action
    for (var i = 2; i <= n; i += 1) {
        if (temp === +args[i]) {

            num += 1;
            max = max < num ? num : max;

        } else {
            num = 1;
            temp = +args[i];
        }
    }
    console.log(max);

}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);