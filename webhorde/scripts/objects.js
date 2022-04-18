class object{
    constructor(x,y){
        this.x=x;this.y=y;
        this.children=[];
        this.visible=true;
    }
    //goes and updates children so long as it is visible
    update(updateX,updateY){
        if(!this.visible){return}
        for(const child of this.children){child.update(this.x+updateX,this.y+updateY)}
    }
    addChild(node){
        this.children.push(node)
    }
}

class text extends object{
    constructor(text,x,y,size=2){
        super(x,y)
        this.text=text
        this.size=size;
    }
    update(updateX,updateY){
        if(!this.visible){return}
        ctx.font=this.size+"rem normal"
        ctx.fillText(this.text,this.x+updateX,this.y+updateY)
        super.update(updateX,updateY)
    }
}