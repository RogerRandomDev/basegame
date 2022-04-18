
//just here to make some things a bit easier on me to do

function addChild(obj){root.addChild(obj)}

function changeScene(nscene="title"){
//    root.children=[]
    for(const script of sceneScripts){scriptHolder.removeChild(script)}
    addScript("../scenes/"+nscene)
    
}


function buildScene(json=""){
    //fetches then builds the scene from it
    let data=json
    root=loadObject(data);

}


//gives the whole scene as a json file
function sceneAsJSON(){
    console.log(JSON.stringify(objectAsJSON(root)))
    
}
//converts to allow me to use it as json to store scenes
function objectAsJSON(object){
    //makes all children into the format as well
    if(object.children.length!=0){
        let childReplacement=[]
        for(const child of object.children){childReplacement.push(objectAsJSON(child))}
        object.children=childReplacement
    }
    object.type=object.constructor.name
    return object
    
}




function loadObject(objData){
    switch(objData.type){
        case "object":return applyValues(new object(),objData);break
        case "text":return applyValues(new text(),objData);break


    }

}

function applyValues(object,data){
    for(const [key,value] of Object.entries(data)){
        if(key=="children"){
            let n_children=[]
            for(const child of value){
                n_children.push(loadObject(child))
                
            }
            object[key]=n_children
            
        }else{
            object[key]=value
        }
        
    }
    
    return object
}