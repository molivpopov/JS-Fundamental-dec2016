function solve(args) {

    // set up
    var digit = args[0];
    var nameDigit;

    // Action
    switch (digit) {
        case '0':
            nameDigit = ('zero');
            break;
        case '1':
            nameDigit = ('one');
            break;
        case '2':
            nameDigit = ('two');
            break;
        case '3':
            nameDigit = ('three');
            break;
        case '4':
            nameDigit = ('four');
            break;
        case '5':
            nameDigit = ('five');
            break;
        case '6':
            nameDigit = ('six');
            break;
        case '7':
            nameDigit = ('seven');
            break;
        case '8':
            nameDigit = ('eight');
            break;
        case '9':
            nameDigit = ('nine');
            break;

        default:
            nameDigit = ('not a digit');
            break;
    }
    
    // output
    console.log(nameDigit);
}

solve(['2']);
solve(['0']);
solve(['9']);