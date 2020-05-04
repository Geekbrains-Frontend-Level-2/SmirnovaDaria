const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    let body = req.url;
    if(body === `/css/style.css`) {
        body = fs.readFileSync(`css/style.css`, 'utf8')
    } else if (body === `/script.js`) {
        body = fs.readFileSync(`script.js`, 'utf8')
    } else {
        body = fs.readFileSync(`public/index.html`, 'utf8')
    }
    /*const body = req.url === `/css/style.css`
    ? fs.readFileSync(`css/style.css`, 'utf8') : fs.readFileSync(`public/index.html`, 'utf8')*/
    res.end(body);
})

server.listen(process.env.PORT || 3000);
console.log('Server started');