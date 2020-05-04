const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    let body;

    switch (req.url) {
        case `/css/style.css`:
            body = fs.readFileSync(`css/style.css`, 'utf8');
            break;
        case `/script.js`:
            body = fs.readFileSync(`script.js`, 'utf8');
            break;
        case `/img/product-1.jpg`:
            body = fs.readFileSync(`img/product-1.jpg`);
            break;
        case `/img/product-2.jpg`:
            body = fs.readFileSync(`img/product-2.jpg`);
            break;
        case `/img/product-3.jpg`:
            body = fs.readFileSync(`img/product-3.jpg`);
            break;
        case `/img/product-4.jpg`:
            body = fs.readFileSync(`img/product-4.jpg`);
            break;
        default:
            body = fs.readFileSync(`public/index.html`, 'utf8');
            break;
    }

    /*
    try {
        body = fs.readFileSync(req.url, 'utf8');
    } catch (err) {
        body = fs.readFileSync(`public/index.html`, 'utf8');
    }*/

    res.end(body);
})

server.listen(process.env.PORT || 3000);
console.log('Server started');