let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

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