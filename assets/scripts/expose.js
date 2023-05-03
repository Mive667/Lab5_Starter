// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // select a horn from drop down menu.
  const selectHorn = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const hornAudio = document.getElementsByClassName("hidden");

  // handle drop down change event
  selectHorn.addEventListener("change", (event) => {
    const selectedValue = event.target.value;

    // console.log("now select " + selectedValue);

    let hornImageRoute = "assets/images/" + selectedValue + ".svg";
    let hornAudioRoute = "assets/audio/" + selectedValue + ".mp3"

    // console.log("imageRoute: " + hornImageRoute);
    // console.log("audioRoute: " + hornAudioRoute);
  
    hornImage.src = hornImageRoute;
    hornImage.alt = selectedValue;
    hornAudio.src = hornAudioRoute;
  });

  

}