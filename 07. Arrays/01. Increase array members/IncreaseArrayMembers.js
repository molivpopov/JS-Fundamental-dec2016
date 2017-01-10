function solve(args) {
    var n = +args[0];
    var arr = [];
    for (var index = 0; index < n; index += 1) {
        arr[index] = index * 5;
        console.log(arr[index]);
    }   
}

solve(['5']);