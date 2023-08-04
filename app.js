require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express()
const port= process.env.PORT;



//handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//middleware express es simplemente una funcion que 
//se ejecuta despues de hacer alguna otra cosa
//para servir contenido estatico 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Gilberto Castillo',
        titulo: 'Curso de Node'
    });
  });

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Gilberto Castillo',
        titulo: 'Curso de Node'
    });
  });

  app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Gilberto Castillo',
        titulo: 'Curso de Node'
    });
  });




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })