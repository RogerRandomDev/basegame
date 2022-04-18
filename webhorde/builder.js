//screen canvas
const canvas=document.createElement("canvas")
document.body.appendChild(canvas)
canvas.width=1024;
canvas.height=600;
//temporary scripts are dealt with here
const tempScripts=document.createElement("div")
document.body.appendChild(tempScripts)
//build base
addPermScript("screenUpdate")
addPermScript("objects")
addPermScript("util")
addPermScript("input")


let root=null


function addScript(scriptName){
    let script=document.createElement('script')
    script.src="./scripts/"+scriptName+".js"
    script.defer=true
}
function addPermScript(scriptName){
    let script=document.createElement('script')
    script.src="./permScripts/"+scriptName+".js"
    document.head.appendChild(script)
}

function changeScene(sceneName){
    signalCheckers=[]
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    root=new object(0,0)
    while(tempScripts.children.length!=0){tempScripts.removeChild(tempScripts.children[0])}
    let scene=document.createElement('script')
    scene.src="./scenes/"+sceneName+".js"
    scene.defer=true
    tempScripts.appendChild(scene)
    
}


