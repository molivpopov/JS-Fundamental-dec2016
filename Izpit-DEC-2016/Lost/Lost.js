function solve(args) {
    //setup
    var rSize = +args[0].split(' ')[0];
    var cSize = +args[0].split(' ')[1];
    var maze = [];
    var maskIndex = 0;
    var masks = [15, 14, 12, 8];
    var r = Math.floor(rSize / 2),
        c = Math.floor(cSize / 2);

    for (var i = 1; i <= rSize; i += 1) {
        maze.push(args[i].split(' ').map(Number));
    }

    while (true) {
        var nextPos = CheckDirection(maze[r][c] & masks[maskIndex]);
        if (nextPos === 0) {
            console.log('No JavaScript, only rakiya ' + r + ' ' + c);
            return;
        }
        var newR = r + nextPos[0];
        if (newR < 0 || newR >= rSize) {
            console.log('No rakiya, only JavaScript ' + r + ' ' + c);
            return;
        }

        var newC = c + nextPos[1];
        if (newC < 0 || newC >= cSize) {
            console.log('No rakiya, only JavaScript ' + r + ' ' + c);
            return;
        }

        if (maze[newR][newC] !== 0) {
            maze[r][c] = 0;
            c = newC; r = newR;
            maskIndex = 0;
        }
        else { maskIndex += 1; }
    }


    function CheckDirection(num) {
        var d = [];
        if ((num & 1) === 1) {
            d.push(-1); d.push(0);
            return d;
        }
        if ((num & 2) === 2) {
            d.push(0); d.push(1);
            return d;
        }
        if ((num & 4) === 4) {
            d.push(1); d.push(0);
            return d;
        }
        if ((num & 8) === 8) {
            d.push(0); d.push(-1);
            return d;
        }
        return 0;
    }
}

console.log(Math.floor(90 / 2));

solve([
    '5 7',
    '9 5 3 11 9 5 3',
    '10 11 10 12 4 3 10',
    '10 10 12 7 13 6 10',
    '12 4 3 9 5 5 2',
    '13 5 4 6 13 5 6'
]);

solve([
    '7 5',
    '9 3 11 9 3',
    '10 12 4 6 10',
    '12 3 13 1 6',
    '9 6 11 12 3',
    '10 9 6 13 6',
    '10 12 5 5 3',
    '12 5 5 5 6'
]);