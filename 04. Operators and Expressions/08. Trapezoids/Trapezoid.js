function solve(args) {
    // set up
    var a = +args[0];
    var b = +args[1];
    var h = +args[2];

    // Action
    var area = (a + b) * h / 2;

    //output result
    console.log(area.toFixed(7));
}

solve(['5', '7', '12']);
solve(['2', '1', '33']);
solve(['8.5', '4.3', '2.7']);