var button = document.getElementsByClassName('fa');
var audio = document.getElementsByTagName('audio');

for (i = 0; i < button.length; i++){
 button[i].addEventListener('click', function(event){
    var song = event.target.parentNode.childNodes[5];
    var header = event.target.parentNode.parentNode.childNodes[1];
    var title = event.target.parentNode.childNodes[3].childNodes[0];
    for (j = 0; j < button.length; j++){
      button[j].className = 'fa fa-play';
      audio[j].pause();
    };
    event.target.classList.toggle('fa-play');
    event.target.classList.toggle('fa-stop');
    if (event.target.classList.contains('fa-stop')){
      song.play();
      header.innerHTML = 'Now Playing: <cite>' + title.innerHTML + '</cite>';
    }
    else{
      song.pause();
      header.innerHTML = 'Select a Song';
    }
  });
}
