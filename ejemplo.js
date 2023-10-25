// Importa el módulo HTTP de Node.js
const http = require('http');

// Define la configuración del servidor
const hostname = '127.0.0.1';
const port = 3000;

// Crea el servidor HTTP
const server = http.createServer((req, res) => {
  // Establece el código de estado HTTP y los encabezados de respuesta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Envia la respuesta al cliente
  res.end('Hola Mundo\n');
});

// Inicia el servidor en el puerto y la dirección especificados
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});