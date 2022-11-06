function back(){
    window.location="index.html";
    }
    status="";
    function preload(){
    img = loadImage("Wardrobe.jpg");
    }
    function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
    }
    function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResults);
    }
    function gotResults(error, results){
    if(error){
    console.log(error);
    }
    console.log(results);
    }
    function draw(){
    image(img, 0, 0, 600, 400);
    }