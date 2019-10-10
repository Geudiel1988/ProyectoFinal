async function obtenerPlaneta(id) {
    let response = await fetch(`https://swapi.co/api/planets/${id}/`)
    let data = await response.json()
    return data
}

async function obtenerDatos(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

async function listarPlanetas(url) {
    let lista = `<ul class="collection with-header">
      <li class="collection-header blue-grey darken-1 center"><h4>Nombre de Planetas de StarWars (SWAPI)</h4></li>`
    let Planetas = await obtenerDatos(url)
    let numeroPlaneta = 1;
    for (const planeta of Planetas.results) {
        lista += `<li class="collection-item">
         <div><strong>${numeroPlaneta}. Nombre:</strong> ${planeta.name}. <strong>Creacion: </strong> ${planeta.created}</div></li>`
        numeroPlaneta++
    }
    lista += '</ul><div class="row">'
    if (Planetas.previous) {
        lista += `<div class="col s6"><a id ="btn-anterior" 
                class="waves-effect waves-light btn orange darken-2"
                data-url="${Planetas.previous}"><i class="material-icons left">skip_previous</i>Anterior</a></div>`
    }
    if (Planetas.next) {
        lista += `<div class="col s6"><a id ="btn-siguiente" 
                class="waves-effect waves-light btn green darken-4"
                data-url="${Planetas.next}"><i class="material-icons right">skip_next</i>Siguiente</a></div></div>`
    }
    return lista
}

async function main(url) {
    let lista = await listarPlanetas(url)
    document.getElementById("informacion").innerHTML = lista
    let btnSiguiente = document.getElementById("btn-siguiente")
    let btnAnterior = document.getElementById("btn-anterior")
    if (btnSiguiente) {
        btnSiguiente.addEventListener("click", function() {
            main(this.dataset.url)
        })
    }
    if (btnAnterior) {
        btnAnterior.addEventListener("click", function() {
            main(this.dataset.url)
        })
    }
}

main('https://swapi.co/api/planets/')