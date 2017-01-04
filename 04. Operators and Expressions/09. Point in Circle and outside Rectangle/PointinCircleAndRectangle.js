function solve(args) {
    // set up
    var x = +args[0],
        y = +args[1];
    var inside = "inside ",
        outside = "outside ";
    var dx = x - 1, // subtract 1, koz the center of circle is on 1,1
        dy = y - 1; // subtract 1, koz the center of circle is on 1,1

    // Action
    var dFromCentar = Math.sqrt(dx * dx + dy * dy);
    var resC = dFromCentar <= 1.5
        ? inside + "circle"
        : outside + "circle"
    // top = 1, left = -1, right = left + 6, bottom = top - 2
    var resR = (x >= -1) && (x <= 5) && (y >= -1) && (y <= 1)
        ? inside + "rectangle"
        : outside + "rectangle"

    //output result
    console.log(resC + " " + resR);
}

solve(['2.5', '2']);
solve(['0', '1']);
solve(['2.5', '1']);
solve(['1', '2']);
solve(['2.07', '2.07']);