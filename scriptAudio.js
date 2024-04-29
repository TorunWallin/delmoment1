document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playAudioButton');
    var audio = document.getElementById('textAudio');
  
    playButton.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pausa uppläsning';
      } else {
        audio.pause();
        playButton.textContent = 'Lyssna på texten';
      }
    });
  
    // Om du vill återställa knappens text när ljudet är klart, lägg till detta:
    audio.onended = function() {
      playButton.textContent = 'Lyssna på texten';
    };
  });