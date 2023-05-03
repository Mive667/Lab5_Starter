// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // select a horn from drop down menu.
  const selectHorn = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const hornAudio = new Audio();
  const volume = document.querySelector("#volume-controls img");
  const volumeslider = document.getElementById("volume");
  const play=document.querySelector("#expose button");

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

  volumeslider.addEventListener("change",(event)=>{
    const selectedvolume=event.target.value;
    hornAudio.volume=selectedvolume/100;
    if(selectedvolume==="0"){
      volume.src="assets/icons/volume-level-0.svg";
    }
    else if(selectedvolume<34){
      volume.src="assets/icons/volume-level-1.svg";
    }
    else if(selectedvolume<67){
      volume.src="assets/icons/volume-level-2.svg";
    }
    else{
      volume.src="assets/icons/volume-level-3.svg";
    }
  })

  play.addEventListener("click",(event)=>{
    hornAudio.play();
    if (selectHorn==="party-horn"){
        confetti.start();
    }
  });
}
