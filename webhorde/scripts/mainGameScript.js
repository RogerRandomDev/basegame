window.movingObject=class extends Sprite{
    constructor(x,y,texture="backup",scaleX=1,scaleY=1,size=16){
        super(x,y,texture,scaleX,scaleY)
        this.size=size
    }
    update(updateX,updateY){
        super.update(updateX,updateY)
    }
}
window.playerObject=class extends window.movingObject{
    constructor(x,y,texture="backup",scaleX=1,scaleY=1,size=16){
        super(x,y,texture,scaleX,scaleY,size)
    }
    update(updateX,updateY){
        if(!this.visible){return}
        let direction=getInputMotion()
        let size=Math.abs(direction[0])+Math.abs(direction[1])
        if(size!=0){
        direction[1]/=size
        direction[0]/=size
        this.x+=direction[1]*8
        this.y+=direction[0]*8
        this.x=Math.max(Math.min(this.x,1024),0)
        this.y=Math.max(Math.min(this.y,600),0)
        }
        super.update(updateX,updateY)
    }
}
window.enemyObject=class extends window.movingObject{
    constructor(x,y,texture="backup",scaleX=1,scaleY=1,size=16){
        super(x,y,texture,scaleX,scaleY,size)
    }
    update(updateX,updateY){
        let dir=[this.x-stored.player.x,this.y-stored.player.y]
        let size=Math.abs(dir[0])+Math.abs(dir[1])
        if(size!=0){
        dir[0]/=size
        dir[1]/=size
        this.x-=dir[0]*6
        this.y-=dir[1]*6
        }
        super.update(updateX,updateY)
    }
}