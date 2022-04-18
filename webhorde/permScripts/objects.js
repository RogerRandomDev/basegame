class Color{
    constructor(r,g,b){
        this.r=r;this.g=g;this.b=b;
    }
    getColor(){
        return "rgb("+this.r+","+this.g+","+this.b+")"
    }
}


class object{
    constructor(x,y){
        this.x=x;this.y=y;
        this.children=[];
        this.visible=true;
        this.onrecieve=""
        
    }
    //goes and updates children so long as it is visible
    update(updateX=0,updateY=0){
        if(!this.visible){return}
        for(const child of this.children){child.update(this.x+updateX,this.y+updateY)}
    }
    addChild(node){
        this.children.push(node)
    }
    receive(event,recieved){
        try{eval(this.onrecieve+"('"+event+"','"+recieved+"')")}catch{console.log("a")}}
}

class text extends object{
    constructor(text,x,y,size=1,color=new Color(0,0,0)){
        super(x,y)
        this.text=text;
        this.size=size;
        this.color=color
    }
    center(){
        ctx.font=this.size+"rem normal"
        let length=ctx.measureText(this.text).width;
        this.x-=Math.round(length/2)
    }



    update(updateX=0,updateY=0){
        if(!this.visible){return}
        ctx.font=this.size+"rem normal"
        ctx.fillStyle=this.color.getColor()
        ctx.fillText(this.text,this.x+updateX,this.y+updateY)
        super.update(updateX,updateY)
    }
}
class MultiLineText extends object{
    constructor(text,x,y,size=1,color=new Color(0,0,0)){
        super(x,y)
        this.text=text;
        this.size=size;
        this.color=color;
        this.centerOffset=[]

    }
    center(){
        this.centerOffset=[]
        let textlines=this.text.split("\n")
        ctx.font=this.size+"rem normal"
        for(let line of textlines){
            let length=ctx.measureText(line).width
            this.centerOffset.push(Math.round(length/2))
        }
    }
    update(updateX=0,updateY=0){
        if(!this.visible){return}
        let lines=this.text.split("\n")
        ctx.font=this.size+"rem normal"
        ctx.fillStyle=this.color.getColor()
        for(let tline in lines){
            let tlinetext=lines[tline]
            ctx.fillText(tlinetext,Math.round(this.x+updateX-this.centerOffset[tline])+0.5,this.y+updateY+tline*20*this.size-0.5)
        }
        super.update(updateX,updateY)
    }
}


class Sprite extends object{
    constructor(x,y,texture="backup",scaleX=1,scaleY=1){
        super(x,y)
        this.texture=texture;this.scaleX=scaleX;this.scaleY=scaleY;
        this.img=new Image();
        
        this.img.src="./images/"+this.texture+".png"
    }
    update(updateX,updateY){
        if(!this.visible){return}
        ctx.scale(this.scaleX,this.scaleY)
        ctx.drawImage(this.img,this.x+updateX,this.y+updateY)
        ctx.scale(1/this.scaleX,1/this.scaleY)
    }
}