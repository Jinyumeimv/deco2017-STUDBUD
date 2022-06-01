// Find a free dictionary API, and copy and paste the URL. It can send requests to the dictionary API and get the word's meaning, sound, etc.
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("content");
const sound = document.getElementById("pronounce");
const searchBar = document.getElementById("search_bar");
const btn = document.getElementById("check");

// Add the click type to the check button, user can get the word information. 
btn.addEventListener("click", () => {
    // get the value of search, It can be used to find the information in the dictionary API. 
    let inputWord = searchBar.value;
    console.log(inputWord);
    fetch(`${url}${inputWord}`)
    .then((response) =>response.json())
    .then((data) =>{
        console.log(data);
        // copy and paste the HTML code, and use jQuery to get the information from API.
        result.innerHTML = `
        <p id="word">${inputWord}</p>
        <p id="property">${data[0].meanings[0].partOfSpeech}</p>
        <button id="sound" click ="playSound()">
        <i class="material-icons">volume_up</i>
        </button>
        <p id="mean">${data[0].meanings[0].definitions[0].definition}</p>
        <p id="synonym">Synonyms</p>
        <div id="synonyms">
          <p id="synonym_1">${data[0].meanings[0].synonyms[0]}</p>
          <p id="synonym_2">${data[0].meanings[0].synonyms[1]}</p>
          <p id="synonym_3">${data[0].meanings[0].synonyms[2]}</p>
        </div>`;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        console.log(sound);
    // Set the onclick function to the sound button
        document.getElementById('sound').onclick = playSound;

    });
});

// Call the palySound() function
function playSound(){
    sound.play();
    console.log("call");
};