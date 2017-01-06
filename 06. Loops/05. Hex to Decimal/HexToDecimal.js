function solve(args) {

    // Set Up
    var hex = args[0].toUpperCase();
    var base = 16;
    var hexDigit = {
        0: '0', 1: '1', 2: '2', 3: '3',
        4: '4', 5: '5', 6: '6', 7: '7',
        8: '8', 9: '9', A: '10', B: '11',
        C: '12', D: '13', E: '14', F: '15'
    };
    var char;
    var decNumber = 0;

    // Action
    for (var i = 0; i < hex.length; i += 1) {
        char = hex.charAt(i);
        decNumber = decNumber * base + +hexDigit[char];
    }

    //output
    console.log(decNumber);
}

solve(['AA22']);