class Dispaly{
    constructor(dispayValorActual, dispayValorAnterior){
        this.dispayValorActual = dispayValorActual;
        this.dispayValorAnterior = dispayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signo = {
            sumar: "+",
            restar: "-",
            multiplicar: "x",
            dividir: "%",
        
        }
        
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValres();
    }

    borrarTodo(){
        this.valorAnterior = "";
        this.valorActual = "";
        this.tipoOperacion = undefined;
        this.imprimirValres();
    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.imprimirValres();
        this.valorActual = "";
    }

    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes("."))return
        this.valorActual = this.valorActual.toString() +  numero;
        this.imprimirValres();
        

    }
    
    imprimirValres(){
        this.dispayValorActual.textContent = this.valorActual;
        this.dispayValorAnterior.textContent = `${this.valorAnterior} ${this.signo[this.tipoOperacion] || ""}`;
        
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior) ;
        const valorActual = parseFloat(this.valorActual) ;

        if(isNaN(valorActual)  || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }

    
}