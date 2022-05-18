/* 1. Escreva um programa para ler 2 valores (considere que não serão informados valores iguais) e escrever o maior deles.*/

function maiornumero (maior, menor){
  if (maior > menor){
    return "O valor " + maior + " é o maior";
  }else{
    return "O valor " + menor + " é o maior";
  }
}
console.log(maiornumero(50,25)); // teste para o primeiro número ser o maior.
console.log(maiornumero(25,60));// teste para o segundo número ser o maior.

/*2. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não    é necessário considerar o mês em que ela nasceu).
*/

function votacao (idade){
if (idade >=16 ){
  return "O usuário está apto a votar";
}else{
  return "O usuário não está apto a votar";
}
}
console.log(votacao(16)) //teste para estar apto a votar.
console.log(votacao(15)) // teste para não estar apto a votar.

/* 3. Escreva um programa que verifique a validade de uma senha fornecida pelo  usuário. A senha válida é o número 1234. Devem ser impressas     as seguintes mensagens:
ACESSO    PERMITIDO    caso    a    senha    seja    válida.
ACESSO    NEGADO    caso    a    senha    seja    inválida.
*/

function password (senha){
  if (senha == 1234){
    return "PASSWORD ACCEPTED -> SENHA ACEITA -> ACESSO PERMITIDO";
  }else{
    return "WRONG PASSWORD -> SENHA INCORRETA -> ACESSO NEGADO";
  }
}
console.log(password(1234)) //teste para acerto de senha.
console.log(password(1243)) //teset para erro de senha.

/*4. As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa   que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*/

function compra (quantidade){
  if(quantidade <= 11){
    return "O valor de " + quantidade + " maçãs é de R$ " + (quantidade *(0.30)) + " reais"; // teste para compra de n <= 11 maçãs 
  }else{
    return "O valor de " + quantidade + " maçãs é de R$ " + (quantidade * (0.25)) + " reais"; // teste para compra de n > 11 maçãs
  }
}
console.log(compra(11)) 
console.log(compra(12))

/*5. Tendo como entrada a altura e o sexo (codificado da seguinte forma:
  1:feminino   2:masculino)
  de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:
  - para homens:(72.7 * Altura) – 58
  - para mulheres:(62.1 * Altura) – 44.7
*/

function pesoideal (altura,sexo){
  if (sexo == "masculino"){
    return "Para a sua altura o seu peso ideal seria: " + (72.7 * altura - 58) + "kg";
  }else{
    return "Para a sua altura o seu peso ideal seria: " + (62.1 * altura - 44.7) + "kg";
  }
}
console.log (pesoideal (1.75, "masculino")) //teste para sexo masculino
console.log (pesoideal (1.65, "feminino")) // teste para sexo feminino