const
    http = require('http'),
    URI = require('urijs'),
    port = 3000,
    line = '\r\n';

const requestHandler = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Simple online URL parser by Tito Luyo Murata${line}`);
    let url = URI(req.url);
    res.write(`full path:${url.toString()}${line}`);
    res.write(`path only:${url.path()}${line}`);
    res.write(`query    :${url.query()}${line}`);
    res.end();
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happend', err);
    }

    console.log(`server is listening on ${port}`);
});