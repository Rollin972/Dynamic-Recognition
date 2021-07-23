function preload()
{

}

function setup()
{
  canvas = createCanvas(600,400);
  canvas.position(600,450);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5H1RWP1cu/model.json",modelLoaded);
}

function draw()
{
   image(video,0,0,600,400);
   classifier.classify(video,gotResult);
}

function modelLoaded()
{
    console.log("model loaded successfully!");
}

function gotResult(error,result)
{
    if (error)
    {
        console.log(error);
    }

    else
    {
        document.getElementById("ob").innerHTML = result[0].label;
        document.getElementById("acc").innerHTML = result[0].confidence.toFixed(3);
    }
}