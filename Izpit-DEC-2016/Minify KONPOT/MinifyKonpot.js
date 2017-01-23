function solve(args) {
    //setup
    var text = args.join('').replace(/\s/g, '');
    const BASE = 63;
    var step = text;
    var oldlen;
    do {
        oldlen = step.length;
        step = step.replace(/{;*}/g, ';');
    } while (step.length !== oldlen);

    step = step
        .replace(/;+/g, ';')
        .replace(/{;+/g, '{')
        .replace(/^;/, '')
        .replace(/;$/, '')
        .replace(/;}/g, '}')
        .replace(/;{/g, '{')
        .replace(/{;/g, '{')
        .replace(/};/g, '}');

    var identitfier = step.match(/[a-zA-Z_0-9]+/g);
    var numberOfSeparators = step.replace(/[a-zA-Z_0-9]+/g, '').length;
    var diffIdentifier = [];

    //identitfier.forEach(x => diffIdentifier[x] = (diffIdentifier[x] || 0) + 1);

    while (identitfier.length > 0) {
        var pp = { id: identitfier.shift(), count: 1 };
        var el = 0;
    
        while (identitfier.length > 0 &&
            (el = identitfier.indexOf(pp.id)) !== -1) {
            pp.count += 1;
            identitfier.splice(el, 1);
        }
        diffIdentifier.push(pp);
    }
    var finalLentgh = 0;
    diffIdentifier
        .sort(function (a, b) { return b.count - a.count })
        //.sort(function (a, b) { return b.count*b.id.length - a.count*a.id.length })
        .forEach((x, index) => finalLentgh += x.count * (index < BASE ? 1 : 2));

    console.log(finalLentgh + numberOfSeparators);
}


//24
solve([
    'helo;',
    '{this; is',
    ' ; an;;;example;',
    '}',
    'of;',
    '{',
    'KON\nPOT;',
    '{',
    'Some_numbers;',
    '42;5;3}',
    '_}'
]);

//44
solve([
    '; ;;;jGefn4E5Pvq    ;;  ;  ; ;',
    'tQRZ5MMj26Ov { {    {;    ;;    5OVyKBFu7o1T2 ;szDVN2dWhex1V;1gDdNdANG2',
    ';    ;    ;  ;; jGefn4E5Pvq   ;;    ;p0OWoVFZ8c;;}    ;  ; ;',
    '5OVyKBFu7o1T2   ;  szDVN2dWhex1V ;    ;tQRZ5MMj26Ov    ;  ;   };',
    '1gDdNdANG2    ;   p0OWoVFZ8c ;  jGefn4E5Pvq ;; {;Z9n;;',
    ';1gDdNdANG2;   ;;    ;   ;jGefn4E5Pvq    ;; ;;p0OWoVFZ8c;;    ;;',
    ';',
    'tQRZ5MMj26Ov  ;',
    '{    ;szDVN2dWhex1V;   ;',
    ';   jGefn4E5Pvq   ;  ;  } }}'
]);

//146
solve([
    '1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14;',
    '15; 16; 17; 18; 19; 20; 21; 22; 23; 24; 25; 26; 27; 28;',
    '29; 30; 31; 32; 33; 34; 35; 36; 37; 38; 39; 40; 41; 42;',
    '43; 44; 45; 46; 47; 48; 49; 50; 51; 52; 53; 54; 55; 56;',
    '57; 58; 59; 60; 61; 62; 63; 64; 65; 66; 67; 68; 69; 70;'
]);