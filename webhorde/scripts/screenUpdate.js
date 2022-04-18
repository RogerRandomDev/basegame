
window.addEventListener("resize",updateResize)
//makes sure it is at the right size on loadup
updateResize()
//updates screen size when resizing browser
function updateResize(){
    let sizeX=window.innerWidth
    let sizeY=window.innerHeight
    if(Math.abs(sizeX/sizeY)<1.72&&Math.abs(sizeX/sizeY)>1.69){
        canvas.style.width=sizeX
    }else{
        canvas.style.width=sizeY*1.70666
    }
}