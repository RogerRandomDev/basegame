
window.addEventListener("resize",updateResize)
//makes sure it is at the right size on loadup
updateResize()
//updates screen size when resizing browser
function updateResize(){
    let sizeX=window.innerWidth
    let sizeY=window.innerHeight
    

    canvas.style.width=Math.min(sizeY*1.70666,sizeX)
    
}