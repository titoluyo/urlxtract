const
    http = require('http'),
    URI = require('urijs'),
    PORT = process.env.PORT || 5000,
    line = '\r\n';

const requestHandler = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Simple online URL parser by Tito Luyo Murata${line}`);
    let url = URI(req.url);
    res.write(`full path:${url.toString()}${line}`);
    res.write(`path only:${url.path()}${line}`);
    res.write(`query    :${url.query()}${line}`);
    res.write('Source: https://github.com/titoluyo/urlxtract')
    res.end();
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
    if (err) {
        return console.log('something bad happend', err);
    }

    console.log(`server is listening on ${PORT}`);
});