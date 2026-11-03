let sceneNumber = 0;

let sceneTitles = [
    "Scene 1",
    "Scene 2",
    "Scene 3"
];

let sceneTexts = [
    "A calm beginning.",
    "The place becomes busier.",
    "The experience becomes quiet again."
];

let sceneTitle = document.getElementById("scene-title");
let sceneText = document.getElementById("scene-text");
let nextSceneButton = document.getElementById("next-scene");

function showNextScene() {

    sceneNumber = sceneNumber + 1;

    if (sceneNumber >= sceneTitles.length) {
        sceneNumber = 0;
    }

    sceneTitle.innerHTML = sceneTitles[sceneNumber];
    sceneText.innerHTML = sceneTexts[sceneNumber];
}

nextSceneButton.addEventListener("click", showNextScene);
