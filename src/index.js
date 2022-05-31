//import fetch from 'node-fetch';

const express = require ('express');
const morgan = require('morgan');
const app = express();

//configuraciones del servidor
app.set('port',process.env.PORT || 3000)
app.set('json spaces', 2)

//midelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas

app.use('/api/users',require('./routes/users'));

// iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en puerto 3000');
});