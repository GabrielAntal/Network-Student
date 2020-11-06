const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require ('body-parser');
const app = express();
var session = require('express-session');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

app.use(cors());
app.use(bodyParser.json());


/*await mongoose.connect('mongodb://localhost/Connect', {

  useUnifiedTopology: true
  
});

app.listen(3021, function(){
    console.log('Ouvindo em 3021');
}); 


const user = new Schema({
    author: ObjectId,
    nome: String,
    ra: Number,
    email: String,
    senha: String,
    tipo: String
  });
*/

app.post('/cad_post', (req, res)=>{
    console.log(req.body);
    res.end();

});



app.listen(3021, function(){
    console.log('Ouvindo em 3021');
})


