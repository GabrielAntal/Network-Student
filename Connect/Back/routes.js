const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

//const multerConfig = require('./multer');

// configuração express

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname))
app.use(cors());
app.use(bodyParser.json());
//app.use(express.urlencoded({extended: false}));
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

app.get('/Home', (req, res)=>{
    res.render('Home')
});
    
app.get('/Profile', (req, res)=>{
    res.render('Profile')
});

app.post('/users', (req,res)=>{
    var check=false;
     users.findOne({email: req.body.emailadd}).then(function(e) {
        if(e){
            check = true;
        }else{
            check =false;
        }


        if(!check){
            
            users.insertMany([{nome: req.body.fname, ra: req.body.ra, email: req.body.emailadd, senha: req.body.pwd,
                tipo: req.body.tp }])
                .then(function(){
                    console.log(req.body); 
                    res.status(200);
                    res.end();
                }).catch((error)=>{
                    console.log(error)
                })

        }else{
            res.status(403);
            res.end();

        }
     })
    
    /*    if(err){
            users.insertMany([{nome: req.body.fname, ra: req.body.ra, email: req.body.emailadd, senha: req.body.pwd,
                tipo: req.body.tp }])
                .then(function(){
                    console.log(req.body); 
                    res.end();
                }).catch((error)=>{
                    console.log(error)
                })

        }else{
            res.status(403);
            res.end();

        }*/
    
    
            
        
})

app.get('/users', async (req, res)=>{
    
    console.log(req.query)
    var check = await users.findOne({email: req.query.email})

    
       if(!check){
            
            return res.status(500).send();
        }

        if(req.query.senha!=check.senha){
            
            return res.status(404).send();
        }


        return res.status(200).send(check.nome); 
        
})

/*app.post('/posts', multer(multerConfig).single('file'), (req, res)=>{ // prototipo com o multer

})*/