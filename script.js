/*---------------------------------------------------------
VARIABLES
---------------------------------------------------------*/
const paleta = document.querySelector(".paleta");
const botones = document.querySelectorAll(".boton-paleta");
const botonesHslHex = document.querySelectorAll(".botones-hsl-hex")
const generar = document.querySelector(".boton-generador");
const toast = document.querySelector(".toast");
let formatoActual = "hsl";
let cantidadActual = 6;

/*----------------------------------------------------------
Funciones Color Random con HSL 
------------------------------------------------------------*/

function colorAleatorioHsl (){
    let h = Math.floor((Math.random() * 360));
    let s = Math.floor((Math.random() * 101));
    let l = Math.floor((Math.random() * 101));

    return `hsl(${h},${s}%,${l}%)`
};

console.log(colorAleatorioHsl());

/*----------------------------------------------------------
Funciones Color Random con hex
------------------------------------------------------------*/

function colorAleatorioHex (){
    return '#' + Math.random().toString(16).slice(2, 8)
};

/*---------------------------------------------------------
Funcion para crear 1 Tarjeta
---------------------------------------------------------*/


function crearTarjeta(i) {
    let colorRandom;
    if (formatoActual === "hsl"){
        colorRandom = colorAleatorioHsl();
    } else {
        colorRandom = colorAleatorioHex();
    }
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-color");
    tarjeta.style.animationDelay = `${i * 0.1}s`;
    const color = document.createElement("div");
    const codigoColor = document.createElement("div");
    codigoColor.classList.add("codigo-color");
    const hex = document.createElement("p");
    const hsl = document.createElement("p");
    hex.classList.add("codigo");
    hsl.classList.add("codigo")
    color.classList.add("color")
    tarjeta.appendChild(color);
    tarjeta.appendChild(codigoColor);
    codigoColor.appendChild(hsl);
    codigoColor.appendChild(hex);
    paleta.appendChild(tarjeta)

    color.style.backgroundColor = colorRandom;
    
    hsl.textContent = colorAleatorioHsl();
    
    hex.textContent = colorAleatorioHex();

    hex.addEventListener("click", () => {
        navigator.clipboard.writeText(hex.textContent)
        mostrarToast("codigo HEX Copiado")
    })

    hsl.addEventListener("click", () => {
        navigator.clipboard.writeText(hsl.textContent)
        mostrarToast("codigo HSL Copiado")
    })


};

/*---------------------------------------------------------
Funcion para crear paletas.
---------------------------------------------------------*/

function crearPaleta (num) {
    paleta.textContent = "";
    for(let i = 0; i < num ; i++){
        crearTarjeta(i);
    }
};


/*---------------------------------------------------------
Marcar Boton Seleccionado
---------------------------------------------------------*/

botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        
        botones.forEach(function(b){

            b.classList.remove("boton-seleccionado");
        });
        
        boton.classList.add("boton-seleccionado");

        let num = Number(boton.textContent);

        cantidadActual = num;

        mostrarToast(`Se generaran ${num} tarjetas`)
    })
})

botonesHslHex.forEach(function(boton){
    boton.addEventListener("click", function(){

        if (boton.textContent === "HEX"){
            formatoActual = "hex";
            mostrarToast("Se generará colores con HEX");
        } else {
            mostrarToast("Se generará colores con HSL")
            formatoActual = "hsl";
        }
        botonesHslHex.forEach(function(b){
            b.classList.remove("boton-formato-seleccionado");
        });

        boton.classList.add("boton-formato-seleccionado");

        
    })
})

/*---------------------------------------------------------
Boton Generar Paleta
---------------------------------------------------------*/
generar.addEventListener("click", ()=>{
    crearPaleta(cantidadActual);
    mostrarToast("Se generó una paleta aleatoria")
})

crearPaleta(cantidadActual)

/*---------------------------------------------------------
Funcion Mostrar y Quitar Toast
---------------------------------------------------------*/

function mostrarToast (mensaje){
    toast.textContent = mensaje;
    toast.classList.add("toast-mostrar");
    setTimeout(function(){
        toast.classList.remove("toast-mostrar");
    }, 2000);
}