function Solve(params) {
    params = params[0];
    let posProtocol = params.indexOf('://');

    console.log('protocol: ' + params.substring(0, posProtocol));
    let posServer = params.indexOf('/', posProtocol + 3);
    console.log('server: ' + params.substring(posProtocol + 3, posServer));
    console.log('resource: ' + params.substring(posServer, params.length));
}

Solve([ 'hello world' ]);