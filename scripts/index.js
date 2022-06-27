function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let listaAutos = [];

function agregarAuto (marca, modelo, annio) {
    let autoNuevo = new auto(marca, modelo, annio);
    listaAutos.push(autoNuevo);
}

for (i = 1; i <= 30; i++) {
    agregarAuto(i, i, i);
}

document.write(listaAutos[0].marca);