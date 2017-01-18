function Solve(params) {
    res = '';
    params = params.join('');
    let l = params.length;
    for (let i = l - 1; i >= 0; i -= 1) {
        //let chng = params[]

        res += params[i];
    }
    console.log(res);
}
Solve([ 'sample' ]);