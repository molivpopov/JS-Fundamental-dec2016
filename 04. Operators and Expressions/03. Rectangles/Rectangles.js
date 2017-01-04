function solve(args) {
    // set up
    var width = +args[0];
    var height = +args[1];
    

    // Action
    var area = width * height;
    var perimetar = 2 * (width + height);

    //output result
    console.log(area.toFixed(2) + " " + perimetar.toFixed(2));
}

solve([ '2.5', '3' ]);
solve([ '5', '5' ]);
solve([ '3', '4' ]);