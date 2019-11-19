const http = require('http');
const url = require('url');

http.createServer((req,res) => {
    const pathName = url.parse(req.url).pathname;
    if (['/actors', '/actresses'].includes(pathName)) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        const actors = ['Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp'];
        const actresses = ['Jennifer Aniston', 'Scarlett Johansson', 'Kate Winslet'];
        let lists = [];
        if (pathName === '/actors') {
            lists = actors;
        } else {
            lists = actresses;
        }

        const content = lists.reduce((template, item, index) => {
            return template + `<p>No.${index+1} ${item}</p>`;
        }, `<h1>${pathName.slice(1)}</h1>`);
        res.end(content);
    } else {
        res.writeHead(404);
        res.end('<h1>Requested page not found.</h1>')
    }
}).listen(8888);