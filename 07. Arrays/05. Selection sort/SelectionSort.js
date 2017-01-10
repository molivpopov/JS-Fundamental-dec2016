function solve(args) {
    //setup
    var changes = true;
    var n = +args[0];
    var arrToSort = [];

    for (var index = 0; index < n; index += 1) {
        arrToSort.push(+args[index + 1]);
    }

    //action
    while (changes) {
        changes = false;

        for (var index = 0; index < n - 1; index += 1) {

            // if item befor is gretar than item after, then change thear place
            if (arrToSort[index] > arrToSort[index + 1]) {
                var chang = arrToSort[index];
                arrToSort[index] = arrToSort[index + 1];
                arrToSort[index + 1] = chang;
                changes = true;
            }
        }
    }
    console.log(arrToSort.join('\n'));
}

solve(['6', '3', '4', '1', '5', '2', '6']);
solve(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);