
document.querySelector("h1").addEventListener("click", changeColor)

function changeColor()
{document.querySelector("h1").style.color ="red"}

document.querySelector("a").addEventListener("click",photosPage)

function photosPage(){
    document.querySelector("a").setAttribute("href","http://127.0.0.1:5500/photos.html")
}