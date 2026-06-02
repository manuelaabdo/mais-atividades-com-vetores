let numeros = [];
let multiplosDe10 = [];
let contador = 0;

for (let i = 0; i < 15; i++) {
    numeros[i] = Number(prompt(`Insira o ${i+1}º número:`));
}

for (let i = 0; i < 15; i++) {
    if  (numeros[i] % 10 === 0) {
        multiplosDe10[contador] = i
        contador++
    }
}

if (contador == 0) {
    alert(`Os números inseridos foram: ${numeros.join(", ")}
Não há numeros múltiplos de 10.`)
} else {
alert(`Os números inseridos foram: ${numeros.join(", ")}
Os números múltiplos de 10 estão nas posições ${multiplosDe10.join(", ")}.`)
}