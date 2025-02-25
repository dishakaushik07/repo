let btn = document.querySelector(".btn");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.pitch = 1;
    text_speak.rate = 1;
    text_speak.volume = 1;
    // text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours()
    if(hours>=4 && hours<12) {
        speak("good morning mam");
    }
    else if(hours>=12 && hours<16) {
        speak("good afternoon Mam");
    }
    else if(hours>=16 && hours<20) {
        speak("good evening Mam");
    }
    else {
        speak("Good night Mam")
    }
}
window.addEventListener('load', ()=> {
    wishMe();
})
let speech_Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speech_Recognition;
recognition.onresult = (event) =>{
    console.log(event);
    console.log("done")
}
btn.addEventListener('click',()=> {
    recognition.start();
})