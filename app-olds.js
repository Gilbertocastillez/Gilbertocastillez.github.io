const http = require('http');


//request es lo que se esta solicitando de parte del cliente
//response es lo que va a devolver cuando se procese la request
http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type': 'application/json'})
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
   // res.writeHead(200, {'Content-Type': 'application/csv'})
    
    
    res.write('Hola Mundo');
    
    res.end();
})
.listen(8080);

console.log('escuchando el puerto', 8080)