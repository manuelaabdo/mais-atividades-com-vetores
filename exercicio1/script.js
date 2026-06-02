let idades = [];
let somaIdades = 0;
let media = 0;

for (let i = 0; i < 8; i++) {
    idades[i] = Number(prompt(`Insira a idade da ${i+1}ª pessoa:`));
    somaIdades = somaIdades + idades[i];
}

media = somaIdades / 8

alert(`A média das idades das pessoas cadastradas é: ${media}.`)