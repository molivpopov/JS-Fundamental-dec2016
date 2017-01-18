function Solve(params) {
    let res =  (new String (params[0])).replace(/ /g, '&nbsp;');
    console.log(res);
}

Solve([ 'hello world' ]);