function solve(params) {

    var n = +params[0],
        x = +params[2];
    params = params[1].split(' ');
    var count = 0;

    for (var index = 0; index < n; index += 1) {

        if (x === +params[index]) {
            count += 1;
        };
    }

    console.log(count);
}

solve(['8', '28', '6', '21', '6', '-7856', '73', '73', '-56', '73']);