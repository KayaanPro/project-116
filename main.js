nose_x = 0;
nose_y = 0;

function preload(){
 mustache = loadImage('https://i.postimg.cc/L5bRpbvm/mustache.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, nose_x, nose_y, 30, 30);
}

function take_snapshot(){
    save('Officially A Man.png');
}

function modelLoaded(){
    console.log("Model is Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x-220;
        nose_y = results[0].pose.nose.y-117;
    }
}