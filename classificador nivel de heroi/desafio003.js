class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    };

    atacar(){
        let arma = "";
        if(this.tipo === "guerreiro"){
            arma = "espada";
            console.log(`O ${heroi.tipo} atacou usando ${arma}`);
        }else if(this.tipo === "mago"){
            arma = "magia";
            console.log(`O ${heroi.tipo} atacou usando ${arma}`);
        }else if(this.tipo === "monge"){
            arma = "artes marciais";
            console.log(`O ${heroi.tipo} atacou usando ${arma}`);
        }else if(this.tipo === "ninja"){
            arma = "shuriken";
            console.log(`O ${heroi.tipo} atacou usando ${arma}`);
        }else{
            console.log("Tipo inválido! Tente novamente...");
        };
    };
};

let heroi = new hero("Felipe", 31, "guerreiro");
heroi.atacar();

