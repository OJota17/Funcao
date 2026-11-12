
function fnTriangulo(lado1, lado2, lado3){

    if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3){
        console.log("Equilatero")
    } else if (Lado1 != lado2 || lado2 != lado3 || lado1 != lado3){
        console.log("Isoceles")
    } else{
        console.log("Escaleno")
    }
}
