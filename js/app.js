const myDom = document
let content = myDom.getElementById("contenedorVideos")
contenedorVideos.innerHTML = '<div class="container" id="misVideos"></div>'
let misVideos = myDom.getElementById("misVideos")
const myVideoYt = '<iframe width="150" height="150" src="https://www.youtube.com/embed/FAKjvdKc0gc" title="YouTube video player"></iframe> <br/>'
const cant_videos = 3
for (let index = 0; index < 3; index++) {
    contenedorVideos.innerHTML += myVideoYt     
}

// let myH1 = myDom.getElementsByTagName("h1")
// let myH2 = myDom.getElementsByTagName("h2")
// let myH2id = myDom.getElementById("a")
// let myIdH3 = myDom.getElementById("H3id")

// console.log(myH1)
// console.log(myH2)
// console.log(myIdH3)

// myIdH3.innerText = "Estoy modificando el texto del element"
// // myH2id.innerHTML = "<button>Esto es un boton</button>";

// const myButtonStr = "<button>Esto es un boton</button> <br/>";
// const cant_element = 10
// for (let index = 0; index < cant_element; index++) {
//     myIdH3.innerHTML += myButtonStr
    
// }