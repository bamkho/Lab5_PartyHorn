// main.js
var soundInput = document.getElementById("volume-number");
var soundSlider = document.getElementById("volume-slider");
var volumeImage = document.getElementById("volume-image");

var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");

var sound = document.getElementById("horn-sound");
var soundImage = document.getElementById("sound-image");

var button = document.getElementById("honk-btn");

soundInput.addEventListener(onclick, function (event) {
    event.preventDefault();
});

button.addEventListener("click", function (event) {
    event.preventDefault();
});

soundSlider.oninput = function () {
    soundInput.value = this.value;
    var integer = parseInt(soundInput.value, 10);
    if (integer < 101 && integer > 66)
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    else if (integer < 67 && integer > 33)
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    else if (integer > 0 && integer < 34)
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    else
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";

}

soundInput.oninput = function () {
    soundSlider.value = this.value;
    var integer = parseInt(soundInput.value, 10);
    if (integer < 101 && integer > 66)
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    else if (integer < 67 && integer > 33)
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    else if (integer > 0 && integer < 34)
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    else
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
}

air.onclick = function () {
    soundImage.src = "./assets/media/images/air-horn.svg";
    soundImage.alt = "Air Horn";
    sound.src = "./assets/media/audio/air-horn.mp3"
}

car.onclick = function () {
    soundImage.src = "./assets/media/images/car.svg";
    soundImage.alt = "Car Horn";
    sound.src = "./assets/media/audio/car-horn.mp3"

}

party.onclick = function () {
    soundImage.src = "./assets/media/images/party-horn.svg";
    soundImage.alt = "Party Horn";
    sound.src = "./assets/media/audio/party-horn.mp3"
}

button.onclick = function () {
    if (soundInput.value == "0" || soundSlider.value == "0") {
        sound.volume = 0.0;
        sound.play();
    }
    else {
        var volumeNumber = parseInt(soundInput.value, 10) * 0.01;
        sound.volume = volumeNumber;
        sound.play();
    }

}


// TODO

