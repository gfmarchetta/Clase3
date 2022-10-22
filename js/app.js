const myDom = document
let content = myDom.getElementById("contenedorVideos")
contenedorVideos.innerHTML = '<div class="container" id="misVideos"></div>'
let misVideos = myDom.getElementById("misVideos")
const myVideoYt = '<div class="itemVideo"><iframe width="200" height="150" src="https://www.youtube.com/embed/FAKjvdKc0gc" title="YouTube video player"></iframe></div>'
const cant_videos = 4
for (let index = 0; index < cant_videos; index++) {
    misVideos.innerHTML += myVideoYt     
}