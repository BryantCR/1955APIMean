const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const bodyParser = require('body-parser');
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

const { PersonRouter } = require("./server/routes/ApiRouter");

app.use('/', PersonRouter);

app.listen( 8080, function(){
    console.log( "The server is running in port 8080." );
});