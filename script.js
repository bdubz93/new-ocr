const video = document.getElementById('camera');
const texts = document.querySelectorAll('.text');

// Check if browser supports WebRTC
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch((error) => {
      console.error('Error accessing camera:', error);
    });
} else {
  console.error('Browser does not support WebRTC');
}

// Set up text-to-speech
const synth = window.speechSynthesis;

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}

// Add event listeners to texts
texts.forEach((text) => {
  text.addEventListener('mouseover', () => {
    speak(text.textContent);
  });
});
