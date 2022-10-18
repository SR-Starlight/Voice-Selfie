var SpeechRecognition = window.webkitSpeechRecognition; //Webkitspeechrecognition is an api which recognizes speech (speech to text conversion).
var recognition = new SpeechRecognition(); //We are creating an object."recognition" of class "SpeechRecognition"
var Textbox = document.getElementById("textbox");

function start() {
    Textbox.innerHTML = ""; //We are clearing the textbox.
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript; //Converted speech to text is stored in transcript.
    Textbox.innerHTML = content;
    if (content == "Take my selfie.") {
        Webcam.attach(camera);
    speak();
    }
}

function speak() {
    var synth = window.speechSynthesis; //Speeachsynthesis is for converting text into speech.
    speak_data = "taking selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    //setTimeout(function(){})
    setTimeout(function(){
        take_selfie();
        save();
    },5000);
    }


function take_selfie() {
  
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>'; //We are displaying the picture in the img element.
    });
}
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpg",
    jpg_quality: 90
});

function save() {
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}