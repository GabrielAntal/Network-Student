module.exports = class Principal{
    static async check(ch){
        if(ch==200){
            var span = document.createElement("span")
            span.className="spanchecktrue";
            span.innerHTML = "Cadastrado!"   
         }
    }

    static async sendReq(){
        const Axios = require('axios');
        Axios.post('http://localhost:3021/cad_post', {
            fname: document.getElementById("fname"),
            ra: document.getElementById("ra"),
            emailadd: document.getElementById("emailadd"),
            pwd: document.getElementById("pwd"),
            tp: document.getElementById("tipo")
        })
        .catch(error => console.error(error))
    }
}

    

