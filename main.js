noseX=0;
noseY=0;

function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modeloaded);
posenet.on('pose',gotPoses);
}
function modeloaded(){
    console.log("posenet is initialized");

}
function gotPoses(){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log('noseX= '+noseX);
        console.log('noseY= '+noseY);
}
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,30,30);
}


function takeSnapshot(){
    save("mustache.png");
}