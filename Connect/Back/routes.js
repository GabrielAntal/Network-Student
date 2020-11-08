const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const Principal = require('./javascript/principal')
//const multerConfig = require('./multer');

// configuração express
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static(__dirname + '/public'))
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.listen(3021, function(){
    console.log('ouvindo em 3021')

});

// final configuração express

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

const users = mongoose.model('users', user);

app.get('/', (req, res)=>{
    res.render('main', {layout: 'index'})
});

app.get('/home', (req, res)=>{
    res.render('home', {layout: 'homeindex'})
});

app.get('/profile', (req, res)=>{
    res.render('profile', {layout: 'profileindex'})
});

app.post('/cad_post', (req,res)=>{
    res.render('main', {layout: 'index'})
    users.insertMany([{nome: req.body.fname, ra: req.body.ra, email: req.body.emailadd, senha: req.body.pwd,
        tipo: req.body.tp }])
        .then(function(){
       var sts = res.status(200);
         Principal.check(sts);
             
            console.log(req.body);
            res.end();
        }).catch((error)=>{
            console.log(error)
        })
            
        
})

app.get('/user', (req, res)=>{
    users.find({email: req.query.email, pwd: req.query.senha})
    .then( function(){
        
        console.log(req.query);
        res.end();
    }).catch((error)=>{
        console.log(error);
    })

})

/*app.post('/posts', multer(multerConfig).single('file'), (req, res)=>{ // prototipo com o multer

})*/