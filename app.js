var button = document.getElementsByClassName('fa');
var song =document.getElementsByTagName('audio');
var header = document.getElementsByTagName('header');
var songName = document.getElementsByClassName('song');

button[0].addEventListener('click', function(e){

  console.log(e);
  button[0].classList.toggle('fa-play');
  button[0].classList.toggle('fa-stop');
  if(button[0].classList.contains('fa-stop')){
    song[0].play();
    header[0].innerHTML = 'Now Playing: ' + songName[0].innerHTML;
  }
  else {
    song[0].pause();
    header[0].innerHTML = 'Select a song!';
  }

});
