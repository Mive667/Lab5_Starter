// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // select a horn from drop down menu.
  const selectHorn = document.getElementById("horn-select");
  var selectedValue; // store the Strig of selected horn name
  const hornImage = document.querySelector("#expose img");

  // select audio and volume
  const hornAudio = new Audio();
  const volume = document.querySelector("#volume-controls img");
  const volumeSlider = document.getElementById("volume");
  const play = document.querySelector("#expose button");

  // handle drop down change event
  // set corresponding image and audio source
  selectHorn.addEventListener("change", (event) => {
    selectedValue = event.target.value;
    let hornImageRoute = "assets/images/" + selectedValue + ".svg";
    let hornAudioRoute = "assets/audio/" + selectedValue + ".mp3"
    hornImage.src = hornImageRoute;
    hornImage.alt = selectedValue;
    hornAudio.src = hornAudioRoute;
  });

  // handle volumSlider change event
  // set volume level according to slider
  volumeSlider.addEventListener("change", (event)=>{
    const selectedVolume = event.target.value;
    hornAudio.volume = selectedVolume / 100;
    if (selectedVolume === "0"){
      volume.src = "assets/icons/volume-level-0.svg";
    }
    else if (selectedVolume < 34){
      volume.src = "assets/icons/volume-level-1.svg";
    }
    else if (selectedVolume < 67){
      volume.src = "assets/icons/volume-level-2.svg";
    }
    else{
      volume.src = "assets/icons/volume-level-3.svg";
    }
  })

  // handle playButton change event
  play.addEventListener("click", (event)=>{
    hornAudio.play();
    // confetti shoot out
    const jsConfetti = new JSConfetti();
    console.log(selectHorn)
    if (selectedValue == "party-horn"){
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        emojiSize: 80,
        confettiRadius: 100,
        confettiNumber: 100
      });
      jsConfetti.clearCanvas();
    }
  });
}
