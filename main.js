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

// 5. Crie uma função que receba a largura e a altura de um retângulo, calcule sua área e exiba o resultado. (Para calcular a área de um retângulo, utilize a fórmula Área = base × altura), O resultado deve ser expresso em unidades de área, como centímetros quadrados (cm²) 

function fnArea(base, altura){
    area = base * altura
    console.log(area + " cm²")
}

// 6. Crie uma função que receba um número e realize uma contagem regressiva até chegar a zero, utilizando um laço de repetição.

function fnContagem(num){
    for(i = num; i >= 0; i= i-1){
        console.log(i)
    }
}

// 7. Crie uma função que receba o salário de um funcionário e aplique um aumento de acordo com as seguintes regras: salários menores que R$ 1.000 recebem 20% de aumento, entre R$ 1.000 e R$ 2.000 recebem 15% e acima de R$ 2.000 recebem 10%. Ao final, exiba o novo salário.

function fnAumento(salario){
    if (salario < 1000 && salario >= 0){
        salario = salario * 1.20
        console.log("O Salário é de: " + salario);
    } else if (salario >= 1000 && salario <= 2000){
        salario = salario * 1.15
        console.log("O Salário é de: " + salario);
    } else {
        salario = salario * 1.10
        console.log("O Salário é de: " + salario);
    }
    console.log("O Salário é invalido");
}

// 8. Crie uma função que receba um número e verifique se ele é par ou ímpar. Ao final, exiba uma mensagem informando o resultado.

function fnPar_impar (numero1){
    if (numero1 % 2 == 0){
        console.log("Par")
    } else {
        console.log("Impar")
    }
}

// 9. Crie uma função que receba uma temperatura em Celsius e converta para Fahrenheit. A função também deverá receber uma informação opcional para definir se deseja realizar a conversão inversa, de Fahrenheit para Celsius. Caso essa informação não seja fornecida, deverá realizar a conversão padrão de Celsius para Fahrenheit.

function fnTemperatura (tempo, tipo){

    if (tipo == "C"){
        console.log("Você escolheu Celsius!")
        temperaturaConvertida = ((tempo * 1.8) + 32)
    } else if (tipo == "F"){
        console.log("Você escolheu Fahrenheit!")
        temperaturaConvertida = ((tempo - 32) * (5 / 9))
    }

console.log("O Valor convertido é: " + temperaturaConvertida)
}

// 10. Crie uma função que receba três números representando os lados de um triângulo e verifique se ele é equilátero, isósceles ou escaleno. 

function fnTriangulo(lado1, lado2, lado3){

    if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3){
        console.log("Equilatero")
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        console.log("Escaleno")
    } else{
        console.log("Isoceles")
    }
}



// 11. Crie uma função que receba um número inteiro positivo e calcule a soma de todos os números de 1 até o número informado, utilizando um laço de repetição. Exemplo: se o número informado for 5, deverá calcular 1 + 2 + 3 + 4 + 5 e exibir 15. 

function fnCalculoSequenciaNumerica(numero){
    // é uma opção de declaração
    let valorSomado = 0, contador = 0

    if(numero <= 0 ){
        console.log("Digite um valor  maior que 0")
        return false
    }

    while (contador <= numero)
        valorSomado = valorSomado + contador
    contador++

    console.log("O valor final é: " + valorSomado)
}

// 12. Crie uma função que receba o valor de um produto e o percentual de desconto. O percentual de desconto deverá ser opcional, considerando 10% caso não seja informado. Ao final, exiba o valor do desconto e o preço final do produto. 

