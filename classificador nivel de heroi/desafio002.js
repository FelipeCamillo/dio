let vitorias = 172
let derrotas = 122
let saldoVitorias = vitorias - derrotas
let nivel = calculateNivel(saldoVitorias)

function calculateNivel(saldoVitorias) {
    if(saldoVitorias <= 10){
        return "Ferro"
    } else if(saldoVitorias > 10 && saldoVitorias <= 20){
        return "Bronze"
    } else if(saldoVitorias > 20 && saldoVitorias <= 50){
        return "Prata"
    } else if(saldoVitorias > 50 && saldoVitorias <= 80){
        return "Ouro"
    } else if(saldoVitorias > 80 && saldoVitorias <= 90){
        return "Diamante"
    } else if(saldoVitorias > 90 && saldoVitorias <= 100){
        return "Lendário"
    } else if(saldoVitorias > 100){
        return "Imortal"
    }
}

console.log(`O Herói tem saldo de ${saldoVitorias} vitórias, e está no nível ${nivel}`)