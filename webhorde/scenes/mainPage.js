function ready(){
let back=new Sprite(0,0,"background",16,16.213)
root.addChild(back)
let script=addScript("mainPageScript",finishload)

stored["basemenu"]=new object(0,0)
}
function finishload(){
    
    let btn1=new UIbutton(512-48,360-48,96,32)
    let btn2=new UIbutton(512-48,360,96,32)
    let btn3=new UIbutton(512-48,360+48,96,32)
    btn3.addText("Quit",new Color(255,255,255))
    btn1.addText("Play",new Color(255,255,255))
    btn2.addText("Options",new Color(255,255,255))
    btn1.active=true
    btn1.next=btn2
    btn2.previous=btn1
    btn2.next=btn3
    btn3.previous=btn2
    stored["basemenu"].addChild(btn1)
    stored["basemenu"].addChild(btn2)
    stored["basemenu"].addChild(btn3)
    root.addChild(stored["basemenu"])
    btn1.onPress="changeScene('mainGame')"
    btn2.onPress="changeArea('settings')"
    btn3.onPress="changeScene('title')"
}