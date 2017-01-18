function Solve(params) {
    res = 'Incorrect';
    params = params.join('');
    let l = params.length;
    let br = 0;
    for (let i = 0; i < l; i += 1) {

        if (params[i] === '(') { br += 1 };
        if (params[i] === ')') { br -= 1 };
        if (br < 0) {
            return res;
        }

    }
    if (br === 0) { res = 'Correct' };
    console.log(res);
}

Solve(['((a+b)/5-d)']);
Solve([')(a+b))']);