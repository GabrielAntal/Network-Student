module.exports = class Principal{
    static async check(ch){
        if(ch==200){
            var span = document.createElement("span")
            span.className="spanchecktrue";
            span.innerHTML = "Cadastrado!"   
         }
    }
}

