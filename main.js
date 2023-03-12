
x = 0;
y = 0;
drawapple = "";
apple = "";
toNumber = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()

function preload(){
    apple = loadImage("apple.png");
}

function setup() {
    canvas = createCanvas(900, 600);
}
function draw() {

    if (drawapple == "set") {
        for(var i = 1; i <= toNumber; i++){
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            image(apple, x, y, 50, 50);
        }
        
        document.getElementById("status").innerHTML = "Apples Drawn";
        drawapple = "";
    }

}
function start() {
    document.getElementById("status").innerHTML = "System Is Listening. Please Speak";
    recognition.start();
}
recognition.onresult = function (event) {

    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "Speech Has Been Recognised As: " + content;

    toNumber = Number(content);

    if (Number.isInteger(toNumber)) {

        document.getElementById("status").innerHTML = "Started Drawing Apples";
        drawapple = "set";
    }
}