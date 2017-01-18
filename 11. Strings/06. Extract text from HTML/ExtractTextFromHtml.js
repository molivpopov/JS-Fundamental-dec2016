function solve(args) {
    let params = args;
    let res = '';

    for (let i in params) {
        params[i] = params[i].replace(/<.*?>/ig, '').trim();
        res += params[i];
    };
    console.log(res);
}

Solve([ 'hello world' ]);