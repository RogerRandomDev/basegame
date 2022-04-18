window.UIbutton=class extends object{
    constructor(x,y,sizeX=32,sizeY=32,color=new Color(0,0,0)){
    super(x,y)
    this.sizeX=sizeX;this.sizeY=sizeY;
    this.color=color
    this.active=false
    this.next=null
    this.previous=null
    this.hovered=false
    this.onPress=""
    signalCheckers.push(this)
    }
    receive(event,recieved){
        //switch to next or previous button
        if(event=="keyDown"&&!inputDone&&this.active){

            switch(recieved){
                case("w"):
                if(this.previous!=null){
                    this.previous.active=true
                    this.active=false
                    inputDone=true
                }
                break
                case("s"):
                if(this.next!=null){
                    this.next.active=true
                    this.active=false
                    inputDone=true
                }
                break
                //if active and enter is pressed, then activate self
                case("enter"):
                if(this.active){
                    eval(this.onPress)
                }
                break
            }
        }
    }
    addText(txt="",col=new Color(0,0,0)){
        let t=new text(txt,this.sizeX/2,this.sizeY/2,1,col)
        this.addChild(t)
        t.center()
    }
    update(updateX,updateY){
        if(!this.visible){return}
        let fillColor=new Color(this.color.r,this.color.g,this.color.b)
        
        if(this.active){
            fillColor.r+=64
            fillColor.g+=64
            
            fillColor.b+=64
        }
        ctx.fillStyle=fillColor.getColor()
        ctx.fillRect(this.x+updateX,this.y+updateY,this.sizeX,this.sizeY)
        super.update(updateX,updateY)
    }
}
