const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static(__dirname + '/public'))
app.use(cors());
app.use(bodyParser.json());
app.listen(3021, function(){
    console.log('ouvindo em 3021')
});

app.get('/', (req, res)=>{
    res.render('main', {layout: 'index'})
});

app.get('/mainpage', (req, res)=>{
    res.render('mainpage', {layout: 'mainpagelayout'})
})