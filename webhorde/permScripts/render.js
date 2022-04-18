let ctx=canvas.getContext('2d')
//deals with any visual things for me
ctx.imageSmoothingEnabled=false;
ctx.filter="blur(0px) drop-shadow(0px,0px,0px #00000000)"
//done so centering works later with fonts
ctx.font="1rem normal"
ctx.fillText("test",0,0)
ctx.shadowBlur=0;
ctx.shadowOffsetX=0;
ctx.shadowOffsetY=0;
let updater=null


function startTime(){
    stopTime()
    updater=setInterval(updateTime,50)
}


function stopTime(){if(updater!=null){clearInterval(updater);updater=null}}



let delta=1/50
function updateTime(){
    ctx.fillStyle='rgb(255,255,255)'
    ctx.fillRect(0,0,1024,1024)
    root.update()
}
startTime()

changeScene("title")