const dispayValorActual = document.getElementById("id_valor_actual");
const dispayValorAnterior = document.getElementById("id_valor_anterior");
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const dispaly = new Dispaly(dispayValorActual,dispayValorAnterior);
botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => dispaly.agregarNumero(boton.innerHTML));
});


botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () => dispaly.computar(boton.value))
});








