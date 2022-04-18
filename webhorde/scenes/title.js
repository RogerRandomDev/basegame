
function ready(){
let text1=new MultiLineText("GAME\nTITLE",512,128,8)
text1.center()
let text2=new MultiLineText("Press Any Button\nTo Start",512,450,2)
text2.center()
let inputReceiver=new object(0,0)
inputReceiver.onrecieve="titleInputCheck"
signalCheckers.push(inputReceiver)
root.addChild(inputReceiver)
root.addChild(text2)
root.addChild(text1)
}




function titleInputCheck(event,recieved){
    if(event=="keyDown"){
        changeScene("mainPage")
    }}
