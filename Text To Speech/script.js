const textarea = document.querySelector("textarea");
const button =  document.querySelector("button");
const isSpeaking = true;

const textToSpeech = () => {
    const text = textarea.value;
    const synth = window.speechSynthesis;

    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace);
    }

    if (text.length > 50) {
        if (synth.speaking && isSpeaking) {
            button.innerText = "Pause";
            synth.resume();
            isSpeaking = false;
        } else {
            button.innerText = "Resume";
            synth.pause();
            isSpeaking = true;
        }
    } else {
        isSpeaking = false;
        button.innerText = "Speaking";
    }
}

button.addEventListener('click', textToSpeech);