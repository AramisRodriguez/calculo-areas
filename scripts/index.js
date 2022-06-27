
const PI = Math.PI;



function calculoAreaCuadrado(lado) {
    let area = lado * lado;
    return area;
}

function calculoAreaRectangulo(ancho, largo) {
    let area = ancho * largo;
    return area;
}

function calculoAreaCirculo(radio) {
    let radioCuadrado = radio * radio;
    let area = PI * radioCuadrado;
    return area;
}




function areaCuadrado() {
    let input = document.getElementById("cuadrado");
    let value = Number(input.value);

    let result = document.getElementById("resultCuadrado");

    let area = calculoAreaCuadrado(value);

    result.innerText = `El área del cuadrado es ${area}cm^2`;
}


function areaRectangulo() {
    let inputAncho = document.getElementById("rectanguloAncho");
    let valueAncho = Number(inputAncho.value);

    let inputLargo = document.getElementById("rectanguloLargo");
    let valueLargo = Number(inputLargo.value);

    let result = document.getElementById("resultRectangulo");

    let area = calculoAreaRectangulo(valueAncho, valueLargo);

    result.innerText = `El área del rectángulo es ${area}cm^2`;
}


function areaCirculo() {
    let input = document.getElementById("circulo");
    let value = Number(input.value);

    let result = document.getElementById("resultCirculo");

    let area = calculoAreaCirculo(value);

    result.innerText = `El área del circulo es ${area}cm^2`
}