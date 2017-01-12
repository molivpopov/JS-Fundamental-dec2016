function solve(params) {

    params = params[0].split(' ');
    
    var max = function GetMax(n1, n2) {
        if (n1 > n2) {
            return n1;
        } else return n2;
    };
    
    var n1 = +params[0];
    var n2 = +params[1];
    var n3 = +params[2];
    console.log(max(n1, max(n2, n3)));
}

solve(['petar']);