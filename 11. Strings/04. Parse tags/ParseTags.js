function Solve(params) {

    let pos = 0,
        beforPos = 0,
        level = 0;
    let text = new String(params[0]);
    let l = text.length;
    let f = [];
    f.push(0);
    let res = '';

    while (pos >= 0) {
        pos = text.indexOf('<', pos);
        if (pos > -1) {
            let subStr = text.substring(beforPos, pos);
            if (f[level] === 1)
                subStr = subStr.toUpperCase();
            if (f[level] === -1)
                subStr = subStr.toLowerCase();

            if (text[pos + 1] === 'u') {
                level += 1;
                f[level] = 1;
            }
            if (text[pos + 1] === 'l') {
                level += 1;
                f[level] = -1;
            }
            if (text[pos + 1] === 'o') {
                level += 1;
                f[level] = 0;
            }
            if (text[pos + 1] === '/') {
                level -= 1;
            }
            res += subStr;
            beforPos = text.indexOf('>', pos + 1) + 1;
            pos = beforPos;
        }
    }
    res += text.substring(beforPos, text.length);
    console.log(res);
}

Solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);