function ready(){
    let script=addScript("mainGameScript",finishload)
    
}
function finishload(){
    let player=new playerObject(0,0)
    player.scaleX=2
    player.scaleY=2
    root.addChild(player)
    stored.player=player
    let enemy=new enemyObject(1024,512)
    root.addChild(enemy)
}