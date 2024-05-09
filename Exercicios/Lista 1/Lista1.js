
let entradaUsuarioNumero;
let numero1;
let numero2;
let numero3;

console.log("Exercicio 1, Nome completo.");
let nome = prompt("Nome: ");
let sobrenome = prompt("Sobrenome: ");
console.log("Nome completo: ", nome, "", sobrenome);

console.log("\nExercicio 2, Multiplicação de dois numeros.");
entradaUsuarioNumero = prompt("Primeiro numero:");
numero1 = parseFloat(entradaUsuarioNumero);
entradaUsuarioNumero = prompt("Segundo numero:");
numero2 = parseFloat(entradaUsuarioNumero);
console.log("Resultado da multiplicação:", numero1 * numero2);


console.log("\nExercicio 3, impressão.");
console.log("Olá, mundo!");

console.log("\nExercicio 4, impressão nome.");
nome = prompt("Nome: ");
console.log("Olá, ", nome, "!");

console.log("\nExercicio 5, Atribuição em const");
const numero = 2;
//numero = 3; //Erro por atribuir valor em uma constante.

console.log("\nExercicio 6, atribuição em let");
let numeroLet = 5;
console.log(numeroLet);
numeroLet = "5";
console.log(numeroLet);

console.log("\nExercicio 7, area triangulo");
entradaUsuarioNumero = prompt("Altura triangulo: ");
let altura = parseFloat(entradaUsuarioNumero);
entradaUsuarioNumero = prompt("Base triangulo: ");
let base = parseFloat(entradaUsuarioNumero);
console.log("Area triangulo: ", (base * altura)/2);

console.log("\nExercicio 8, potencia.");
entradaUsuarioNumero = prompt("Primeiro numero: ");
numero1 = parseFloat(entradaUsuarioNumero);
entradaUsuarioNumero = prompt("Potencia: ");
numero2 = parseFloat(entradaUsuarioNumero);
console.log("Resultado potencia: ", numero1**numero2);

console.log("\nExercicio 9, dobro.");
entradaUsuarioNumero = prompt("Insira um numero: ")
numero1 = parseFloat(entradaUsuarioNumero);
console.log("Dobro do numero é: ", numero1 * 2);

console.log("\nExercicio 10, soma de dois numeros.");
entradaUsuarioNumero = prompt("Primeiro numero:");
numero1 = parseFloat(entradaUsuarioNumero);
entradaUsuarioNumero = prompt("Segundo numero:");
numero2 = parseFloat(entradaUsuarioNumero);
console.log("Resultado da soma:", numero1 + numero2); 

console.log("\nExercicio 11, raiz quadrada.");
entradaUsuarioNumero = prompt("Numero para raiz quadrada: ");
numero1 = parseFloat(entradaUsuarioNumero);
console.log("Raiz quadada de", numero1, "é: ", Math.sqrt(numero1));

console.log("\nExercicio 12, perimetro de um circulo.");
entradaUsuarioNumero = prompt("Insira o raio de um circulo, para calcular o primetro: ");
let raio = parseFloat(entradaUsuarioNumero);
console.log("Perimetro do circulo é: ", (2 * 3.14 * raio));

console.log("\nExercicio 13,conversão ºC para ºF.");
entradaUsuarioNumero = prompt("Insira a temperatura em ºC: ");
temperatura = parseFloat(entradaUsuarioNumero);
console.log("Temperatura em ºF: ", (temperatura * 1.8) + 32);

console.log("\nExercicio 14, media de 3 numeros.");
console.log("Insira tres numeros abaixo para media.")
entradaUsuarioNumero = prompt("Primeiro numero: ");
numero1 = parseFloat(entradaUsuarioNumero);
entradaUsuarioNumero = prompt("Segundo numero: ");
numero2 = parseFloat(entradaUsuarioNumero);
entradaUsuarioNumero = prompt("Terceiro numero: ");
numero3 = parseFloat(entradaUsuarioNumero);
console.log("Media: ", (numero1 + numero2 + numero3)/3);

console.log("\nExercicio 15, volume de uma esfera");
entradaUsuarioNumero = prompt("Raio da esfera: ");
raio = parseFloat(entradaUsuarioNumero);
console.log("Volume da esfera é: ", (4 * 3.14 * Math.pow(raio, 3))/3);