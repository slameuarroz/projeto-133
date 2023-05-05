var img=""
var estado=""
var object=[]
function draw(){
    image(img,0,0,640,420);
    if (estado != ""){
        for(var i=0; i<object.length; i++){
            document.getElementById("status").innerHTML="status:objeto identificado"
            fill(255,0,0);
            var percent=floor(object[i].confidence*100);
            text(object[i].label + " "+ percent + "%",object[i].x,object[i].y);
            noFill()
            stroke(255,0,0);
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
    //text("cachorro",45,75);
    
    //rect(30,60,450,350)
    //gato
    //fill(255,0,0);
    //text("gato",320,120);
    //noFill()
    //stroke(255,0,0);
    //rect(300,90,270,320)


    

}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoad);
    document.getElementById("status").innerHTML="status:Detectando objetos";
}
function preload(){
    img=loadImage("download.jpeg");
}
function modelLoad(){
    console.log("modelo carregado");
    estado=true;
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results){
    if (error){
        console.error(error)
    }else{
        console.log(results)
        object=results;
    }
}