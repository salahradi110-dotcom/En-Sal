/* =====================================
   En_Sal - Main App
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const wordList = document.getElementById("word-list");

    if (!wordList) return;

    words.forEach((word) => {

        const card = document.createElement("div");
        card.className = "word-card";

        card.innerHTML = `
            <h3>${word.english}</h3>
            <p>${word.arabic}</p>

            <button class="listen-btn"
                    onclick="speakWord('${word.english}')">
                🔊 استمع للنطق
            </button>
        `;

        wordList.appendChild(card);

    });

});
