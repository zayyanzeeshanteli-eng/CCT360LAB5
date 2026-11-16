let soundscape = document.getElementById("soundscape");

let sceneImage = document.getElementById("scene-image");
let sceneTitle = document.getElementById("scene-title");
let sceneText = document.getElementById("scene-text");
let pageBody = document.getElementById("page-body");
let visualBox = document.getElementsByClassName("visual-box")[0];
let audioStatus = document.getElementById("audio-status");

let sceneButtons = document.getElementsByClassName("scene-button");

let sceneImages = [
    "images/sauna.png",
    "images/steam-room.png",
    "images/jacuzzi.png",
    "images/cold-plunge.png"
];

let sceneTitles = [
    "Sauna",
    "Steam Room",
    "Jacuzzi",
    "Cold Plunge"
];

let sceneTexts = [
    "Water hits the hot sauna rocks and begins the recovery routine.",
    "The sound shifts into the steady atmosphere of the steam room.",
    "The bubbling jacuzzi creates the most relaxed part of the experience.",
    "A splash into cold water finishes the recovery cycle with a sudden reset."
];

let sceneColors = [
    "#f1d7bd",
    "#dce8eb",
    "#cfeef4",
    "#d9f3f8"
];

let pageColors = [
    "#f6eee7",
    "#edf4f5",
    "#e9f7fa",
    "#eefafd"
];

let sceneTimes = [
    0,
    16,
    38,
    58
];

function showScene(sceneNumber) {

    sceneImage.src = sceneImages[sceneNumber];
    sceneTitle.innerHTML = sceneTitles[sceneNumber];
    sceneText.innerHTML = sceneTexts[sceneNumber];

    visualBox.style.backgroundColor = sceneColors[sceneNumber];
    pageBody.style.backgroundColor = pageColors[sceneNumber];

    for (let i = 0; i < sceneButtons.length; i++) {
        sceneButtons[i].style.backgroundColor = "white";
        sceneButtons[i].style.color = "#37474f";
    }

    sceneButtons[sceneNumber].style.backgroundColor = "#455a64";
    sceneButtons[sceneNumber].style.color = "white";
}

function jumpToScene(sceneNumber) {

    soundscape.currentTime = sceneTimes[sceneNumber];
    showScene(sceneNumber);
}

soundscape.addEventListener("play", function() {
    audioStatus.innerHTML = "Playing the recovery soundscape.";
});

soundscape.addEventListener("pause", function() {

    if (soundscape.currentTime < soundscape.duration) {
        audioStatus.innerHTML =
            "Paused at " + Math.floor(soundscape.currentTime) + " seconds.";
    }
});

soundscape.addEventListener("ended", function() {
    audioStatus.innerHTML = "Recovery journey complete.";
});

soundscape.addEventListener("timeupdate", function() {

    let currentTime = soundscape.currentTime;

    if (currentTime < 16) {
        showScene(0);
    } else if (currentTime < 38) {
        showScene(1);
    } else if (currentTime < 58) {
        showScene(2);
    } else {
        showScene(3);
    }
});

document.getElementById("sauna-button").addEventListener("click", function() {
    jumpToScene(0);
});

document.getElementById("steam-button").addEventListener("click", function() {
    jumpToScene(1);
});

document.getElementById("jacuzzi-button").addEventListener("click", function() {
    jumpToScene(2);
});

document.getElementById("cold-button").addEventListener("click", function() {
    jumpToScene(3);
});

showScene(0);
