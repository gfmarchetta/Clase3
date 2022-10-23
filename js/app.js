const myDom = document

let content = myDom.getElementById("contenedorVideos")
contenedorVideos.innerHTML = '<ul class="container" id="misVideos"></ul>'

let botonera = document.createElement("div")
botonera.id = "botonera"
content.appendChild(botonera)

let sumar_videos = myDom.createElement("input")
sumar_videos.type = "button"
sumar_videos.className = "btn btn-success"
sumar_videos.value = "Agregar Video"
sumar_videos.id = "sumar_videos"
botonera.appendChild(sumar_videos)

let eliminar_videos = myDom.createElement("input")
eliminar_videos.type = "button"
eliminar_videos.className = "btn btn-danger"
eliminar_videos.value = "Eliminar Videos"
eliminar_videos.id = "eliminar_videos"
botonera.appendChild(eliminar_videos)






let misVideos = myDom.getElementById("misVideos")
const myVideoYt = '<li class="itemVideo"><iframe width="200" height="150" src="https://www.youtube.com/embed/FAKjvdKc0gc" title="YouTube video player"></iframe></li>'

function agregarVideo() {
    let videos = myDom.getElementById("misVideos")
    videos.innerHTML += myVideoYt    
}

function eliminarVideos() {
    let videos = myDom.getElementById("misVideos")
    videos.innerText = ""    
}

sumar_videos.onclick = function() {
    agregarVideo()
}
 
eliminar_videos.onclick = function() {
    eliminarVideos()
 }
