const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    let body;
    /* //Предыдущий вариант с жесткими сравнениями
    switch (req.url) {
        case `/css/style.css`:
            body = fs.readFileSync(`public/css/style.css`, 'utf8');
            break;
        case `/script.js`:
            body = fs.readFileSync(`public/script.js`, 'utf8');
            break;
        case `/img/product-1.jpg`:
            body = fs.readFileSync(`public/img/product-1.jpg`);
            break;
        case `/img/product-2.jpg`:
            body = fs.readFileSync(`public/img/product-2.jpg`);
            break;
        case `/img/product-3.jpg`:
            body = fs.readFileSync(`public/img/product-3.jpg`);
            break;
        case `/img/product-4.jpg`:
            body = fs.readFileSync(`public/img/product-4.jpg`);
            break;
        default:
            body = fs.readFileSync(`public/index.html`, 'utf8');
            break;
    }
    */
    //Более гибкий метод для отдачи файлов
    try {
        body = fs.readFileSync(`./public${req.url}`);
    } catch (err) {
        body = fs.readFileSync(`public/index.html`, 'utf8');
    }

    res.end(body);
})

server.listen(process.env.PORT || 3000);
console.log('Server started');