
leftwristX=0;
rightwristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,450);
    canvas.position(560,170);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose", gotPoses);
}
function draw(){
    background('#34eb80');

    document.getElementById("font_size").innerHTML="Font size will be= "+difference+"px";
    fill('#f5dd42');
    textSize(difference);
    text('Anu',50,400);
}
function modelloaded(){
    console.log('Posenet is initialized ');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
  
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}