function solve(args) {

    var p = args.map(Number);
    function LineLenght(x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    };
    var a = LineLenght(p[0], p[1], p[2], p[3]),
        b = LineLenght(p[4], p[5], p[6], p[7]),
        c = LineLenght(p[8], p[9], p[10], p[11]);
        
    var res = (
        a + b > c &&
        a + c > b &&
        b + c > a)
        ? 'Triangle can be built'
        : 'Triangle can not be built';


    console.log(a.toFixed(2));
    console.log(b.toFixed(2));
    console.log(c.toFixed(2));
    console.log(res);
}

solve([
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
]);
solve([
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
]);