function Solve(params) {
    let res = 0,
        pos = 0;
    let patern = new String(params[0]).toLowerCase();
    let pLen = patern.length;
    let text = params[1].toLowerCase();
    let l = text.length;

    while (pos >= 0 & pos < l) {
        pos = text.indexOf(patern, pos);
        if (pos != -1){
           res += 1;
           pos += pLen; 
        }     
    }

    console.log(res);
}

Solve([
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);