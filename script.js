
const lyrics = [
    { lyric: "Hello from the other side", song: "Hello", artist: "Adele" },
    { lyric: "Is this the real life? Is this just fantasy?", song: "Bohemian Rhapsody", artist: "Queen" },
    { lyric: "Cause baby you're a firework", song: "Firework", artist: "Katy Perry" },
    { lyric: "Shake it off, shake it off", song: "Shake It Off", artist: "Taylor Swift" }
];

let currentLyricIndex = 0;
let score = 0;

const lyricDisplay = document.getElementById("lyric-display");
const guessInput = document.getElementById("guess-input");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");

function loadLyric() {
    const randomIndex = Math.floor(Math.random() * lyrics.length);
    currentLyricIndex = randomIndex;
    lyricDisplay.textContent = lyrics[randomIndex].lyric;
}

function checkGuess() {
    const userGuess = guessInput.value.toLowerCase();
    const correctSong = lyrics[currentLyricIndex].song.toLowerCase();
    const correctArtist = lyrics[currentLyricIndex].artist.toLowerCase();

    if (userGuess === correctSong || userGuess === correctArtist) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        score += 1;
        scoreDisplay.textContent = score;
    } else {
        feedback.textContent = `Wrong! The correct answer was "${lyrics[currentLyricIndex].song}" by ${lyrics[currentLyricIndex].artist}.`;
        feedback.style.color = "red";
    }

    guessInput.value = "";
    loadLyric();
}

document.getElementById("submit-guess").addEventListener("click", checkGuess);
window.onload = loadLyric;
