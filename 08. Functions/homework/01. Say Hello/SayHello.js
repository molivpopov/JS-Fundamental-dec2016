function solve(params) {
    
    var str = 'Hello, ' + params[0] + '!';
    var print = function MyPrint(params) {
        console.log(params)
    }
    print(str);

}

solve(['petar']);