const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("content");
const sound = document.getElementById("pronounce");
const searchBar = document.getElementById("search_bar");
const btn = document.getElementById("search");

btn.addEventListener("click", () => {
    let inputWord = searchBar.value;
    console.log(inputWord);
    fetch(`${url}${inputWord}`)
    .then((response) =>response.json())
    .then((data) =>{
        console.log(data);
        result.innerHTML = `
        <p id="word">${inputWord}</p>
        <p id="property">${data[0].meanings[0].partOfSpeech}</p>
        <button id="sound" click ="playSound">
        <i class="material-icons">volume_up</i>
        </button>
        <p id="mean">${data[0].meanings[0].definitions[0].definition}</p>
        <p id="synonym">Synonyms</p>
        <div id="synonyms">
          <p id="synonym_1">${data[0].meanings[0].synonyms[0]}</p>
          <p id="synonym_2">${data[0].meanings[0].synonyms[1]}</p>
          <p id="synonym_3">${data[0].meanings[0].synonyms[2]}</p>
        </div>`;
        sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
        console.log(sound);

    });
});


function playSound(){
    sound.play();
};