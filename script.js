/*---------------------------------------------------------
Marcar Boton Seleccionado
---------------------------------------------------------*/
const botones = document.querySelectorAll(".boton-paleta");

botones.forEach(function(boton){
    boton.addEventListener("click", function(){

        botones.forEach(function(b){
            b.classList.remove("boton-seleccionado");
        });
        
        boton.classList.add("boton-seleccionado");
    })
})

/*---------------------------------------------------------
Paletas
---------------------------------------------------------*/

const tarjeta = document.createElement("div");
tarjeta.classList.add("tarjeta-color");
const color = document.createElement("div");
color.classList.add("color")
const hex = document.createElement("p");
const hsl = document.createElement("p");

tarjeta.appendChild(color);
tarjeta.appendChild(hex);
tarjeta.appendChild(hsl);





