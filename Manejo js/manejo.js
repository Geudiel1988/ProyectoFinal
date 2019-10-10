//Selectores JS

//Obtener un elemento por ID
document.getElementById("div5").innerHTML = "Mostrar Imagenes de perros"

//Obtener un ARREGLO de elementos por su clase y guardarlo en una variable
let divs = document.getElementsByClassName("col")

//Recorrer el arreglo de elementos HTML obtenidos a través de su clase
for (let i = 0; i < divs.length; i++) {
    console.log("Contenido del div en pos " + i + ": " +
        divs[i].innerText)
    divs[i].style.backgroundColor = 'blue'
    divs[i].style.color = 'white'
}

//obtener elementos del DOM
document.querySelectorAll(".col") //Obtiene un arreglo de todos los elementos que coincidan con el selector CSS

document.getElementById('div5').addEventListener("click", cambiarPerro)

//Crear una función para cambiar el color a todas las columnas del HTML
function cambiarColorColumnas(color) {
    let columnas = document.getElementsByClassName("col")
    for (let i = 0; i < columnas.length; i++) {
        columnas[i].style.backgroundColor = color
    }
}

function onClickBtn8() {
    console.log("Hizo click en el DIV 8")
}

//Agregar evento a un elemnto HTML desde JS
document.getElementById("cambiarColor8").addEventListener("click", onClickBtn8)
let div7 = document.getElementById("cambiarColor7")
    //Agregar una función anónima de JS
div7.addEventListener("click", function() {
    console.log("Click en el DIV 7")
})







async function cambiarPerro() {
    let perro = await httpCall('https://dog.ceo/api/breeds/image/random')
    document.getElementById("miimagen").src = perro.message
}

async function httpCall(URL) {
    let peticion = await fetch(URL)
    let respuesta = await peticion.json()
    console.log(respuesta)
    return respuesta
}