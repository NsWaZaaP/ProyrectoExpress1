const { publicDecrypt } = require('crypto');
const { lookupService } = require('dns');
const { static } = require('express');
//? se requieren los frameworks y las funiciones necesarias desde node.js
const express = require('express');
const app = express();
//? unificar rutas para que sea mas sencillo saber en que lugar se encuentra nuestro documento
const path = require ('path');

//? se crea el localhost con puerto 3000
app.listen(3000,()=>{
    console.log('server listen ok');
})

//? se utiliza para recibir la ruta de archivos publicos
const publicPath = path.resolve(__dirname,'./public')
app.use(express.static(publicPath))

//? se llama el documento que quiere ser mostrado en el navegador
app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})


