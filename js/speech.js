function speakWord(word) {

    if (!window.speechSynthesis) {
        alert("ميزة النطق غير مدعومة.");
        return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = speechSynthesis.getVoices();

    for (let voice of voices) {
        if (voice.lang.includes("en")) {
            utterance.voice = voice;
            break;
        }
    }

    speechSynthesis.speak(utterance);
}

speechSynthesis.onvoiceschanged = function () {
    speechSynthesis.getVoices();
};
