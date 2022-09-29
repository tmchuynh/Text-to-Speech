let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
let voices = [];

document.querySelector("#talk").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
});

document.querySelector("#rate").addEventListener("input", () => {
    const rate = document.querySelector("#rate").value;
    speech.rate = rate;
    document.querySelector("#rate-label").innerHTML = rate;
});

document.querySelector("#volume").addEventListener("input", () => {
    const volume = document.querySelector("#volume").value;
    speech.volume = volume;
    document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {
    const pitch = document.querySelector("#pitch").value;
    speech.pitch = pitch;
    document.querySelector("#pitch-label").innerHTML = pitch;
});

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};