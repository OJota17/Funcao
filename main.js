//1. Crie uma função que receba o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7) ou reprovado. A mensagem deverá ser personalizada com o nome do aluno. 

function fnMedia(nome, nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7){
        console.log(nome + " está aprovado")
    } else {
        console.log(nome + " está reprovado: " + media)
    }
}

// 2. Crie uma função que receba dois números e exiba a diferença entre eles. 

function fnDiferenca(num1, num2){
    let Diferenca
    if (num1 >= num2){
        Diferenca = num1 - num2
    } else if (num2 > num1){
        Diferenca = num2 - num1
    } else {
        console.log("Digite um numero válido")
    }

    console.log("A diferença entre " + num1 + " e " + num2 + " é " + Diferenca)
}

// 3. Crie uma função que receba um número e exiba sua tabuada de multiplicação, utilizando um laço de repetição, do 1 ao 10. 

function fnTabuada (numero){
    for (i = 1; i <=10; i++){
        resultado = i * numero
        console.log(numero + " X " + i + " = " + resultado);
    }
}

// 4. Crie uma função que receba a idade de uma pessoa e classifique sua faixa etária de acordo com as seguintes regras: menor que 12 anos: criança; de 12 até 17 anos: adolescente; de 18 até 59 anos: adulto; 60 anos ou mais: idoso. Ao final, exiba a classificação correspondente.

function fnIdade(idade){
    if (idade < 12){
        console.log("Criança")
    } else if (idade <= 17){
        console.log("Adolescente")
    } else if (idade <= 59){
        console.log("Adulto")
    } else {
        console.log("Idoso")
    }
}