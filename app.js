const api = "https://thesimpsonsquoteapi.glitch.me/quotes";
const button = document.getElementById("button-change");
const img = document.getElementById("img-simp");
const nameCharacter = document.getElementById("name-character");
const quote = document.getElementById("phrase");

button.addEventListener("click", apiSimpSon);

function apiSimpSon() {
    fetch(api)
    .then(response => response.json())
    .then(data => (img.src = data[0].image, nameCharacter.textContent = data[0].character, quote.textContent = data[0].quote))
}