function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,400);
    canvas.position(700,150);
    poseNet = ml5.poseNet(video,modellodded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    background('grey');
}

function modellodded()
{
    console.log("Your Model is Lodded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}