module.exports = class Principal{
    static async check(ch){
        if(ch==200){
            var span = document.createElement("span")
            span.className="spanchecktrue";
            span.innerHTML = "Cadastrado!"   
         }
    }

    static async sendReq(nome, ra, email, senha, tipo){
        const Axios = require("axios");
        Axios.post('http://localhost:3021/cad_post', {
            fname: nome,
            ra: ra,
            emailadd: email,
            pwd: senha,
            tp: tipo
        })
        .catch(error => console.error(error))
    }

}

