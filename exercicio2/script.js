let idades = [];
let maioresQue25 = [];
let contador = 0;

for (let i = 0; i < 7; i++) {
    idades[i] = Number(prompt(`Insira a idade da ${i+1}ª pessoa:`));
}

for (let i = 0; i < 7; i++) {
    if  (idades[i] > 25) {
        maioresQue25[contador] = i
        contador++
    }
}

if (contador == 0) {
    alert("Não há pessoas com mais de 25 anos cadastradas.")
} else {
alert(`As pessoas com mais de 25 anos estão nas posições: ${maioresQue25.join(", ")}.`)
}