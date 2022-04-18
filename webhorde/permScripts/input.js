let pressedKeys=new Set()
let mousePosX=0;
let mousePosY=0;
let signalCheckers=[]
let hoverCheckers=[]
let inputDone=false
//when pushing key down
document.addEventListener("keydown",function(ev){
    pressedKeys.add(ev.key.toLowerCase())
    UI_inputs(ev.key.toLowerCase())
    inputDone=false
    //input recievers
    for(const checker of signalCheckers){checker.receive("keyDown",ev.key.toLowerCase())}
})
//when pushing key up
document.addEventListener("keyup",function(ev){
    pressedKeys.delete(ev.key.toLowerCase())
    inputDone=false
    //input recievers
    for(const checker of signalCheckers){checker.receive("keyUp",ev.key.toLowerCase())}
})
canvas.addEventListener('mousemove',function(ev){
    let width=Math.round(canvas.style.width.replace("px",""))
    let height=Math.round(window.innerHeight*1.70666)
    mousePosY=(ev.y-canvasBounds.top)/canvasBounds.height*600
    mousePosX=(ev.x-canvasBounds.left)/canvasBounds.width*1024
    for(const checker of hoverCheckers){
        checker.checkHover()
    }
})

function UI_inputs(keyIn){
    switch(keyIn){
        case("enter"):break
    }
}

//input motion using WASD
function getInputMotion(){
    return [pressedKeys.has("s")-pressedKeys.has("w"),pressedKeys.has("d")-pressedKeys.has("a")]
}