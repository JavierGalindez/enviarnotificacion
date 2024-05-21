const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error al cargar el archivo index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url.match(/\.css$/)) {
    fs.readFile(req.url.slice(1), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error al cargar el archivo CSS');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else if (req.url.match(/\.js$/)) {
    fs.readFile(req.url.slice(1), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error al cargar el archivo JS');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Recurso no encontrado');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

