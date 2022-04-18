let pressedKeys=new Set()
let signalCheckers=[]
//when pushing key down
document.addEventListener("keydown",function(ev){
    pressedKeys.add(ev.key.toLowerCase())
    UI_inputs(ev.key.toLowerCase())
    //input recievers
    for(const checker of signalCheckers){checker.receive("keyDown",ev.key.toLowerCase())}
})
//when pushing key up
document.addEventListener("keyup",function(ev){
    pressedKeys.delete(ev.key.toLowerCase())
    //input recievers
    for(const checker of signalCheckers){checker.receive("keyUp",ev.key.toLowerCase())}
})


function UI_inputs(keyIn){
    switch(keyIn){
        case("enter"):break
    }
}

