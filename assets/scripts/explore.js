// explore.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  const image = document.querySelector("#explore img");
  const voice = document.getElementById("voice-select");
  const play = document.querySelector("#explore button");
  const text = document.getElementById("text-to-speak");
  
  function populateVoiceList(){
    const voices = speechSynthesis.getVoices();
    voices.forEach((c) => {
      const option = document.createElement("option");
      option.textContent = `${c.name} (${c.lang})`;
      if (c.default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute('data-lang', c.lang);
      option.setAttribute('data-name', c.name);
      voice.appendChild(option);
    });
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  play.addEventListener("click", ()=>{
    const vo=voice.selectedOptions[0].getAttribute('data-name');
    const t=text.value;
    const speak=new SpeechSynthesisUtterance(t);
    const voicess=speechSynthesis.getVoices();
    const voicep=voicess.find((v)=>v.name===vo)
    speak.voice=voicep;
    speak.volume=1;

    speak.onstart = function() {
      image.src = "assets/images/smiling-open.png";
    };
    
    speak.onend = function() {
      image.src = "assets/images/smiling.png";
    };
    speechSynthesis.speak(speak);
  })
}
