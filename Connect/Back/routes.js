const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
//const multerConfig = require('./multer');

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

mongoose.connect('mongodb://localhost:27017/Connect',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
  id: ObjectId,
  nome: String,
  ra: Number,
  email: String,
  senha: String,
  tipo: String
});

app.get('/', (req, res)=>{
    res.render('main', {layout: 'index'})
});

app.get('/home', (req, res)=>{
    res.render('home', {layout: 'homeindex'})
});

app.get('/profile', (req, res)=>{
    res.render('profile', {layout: 'profileindex'})
});

app.post('/', (req,res)=>{
    console.log(req.body.fname);
    users.insertMany([{nome: req.body.fname, ra: req.body.ra, email: req.body.emailadd, senha: req.body.pwd,
        tipo: req.body.tp }])
        .then(function(){
            
            res.end();
        }).catch((error)=>{
            console.log(error)
        })
        
})

/*app.post('/posts', multer(multerConfig).single('file'), (req, res)=>{ // prototipo com o multer

})*/