let http = require('http');

//Peticion Request
//Respuesta Response
http.createServer((request, response) => {
    console.log("El servidor ha iniciado una nueva peticion en el puerto 9000");
    response.write("Bienvenido a la pagina de prueba");
    response.end();//Terminamos la respuesta
}).listen(9000);