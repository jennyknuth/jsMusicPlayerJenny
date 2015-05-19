var button = document.getElementsByClassName('fa');
var song =document.getElementsByClassName('song');
var header = document.getElementsByTagName('header');
var songName = document.getElementsByTagName('cite');

for (var i = 0; i < button.length; i++){
  button[i].addEventListener('click', function(event){
    console.dir(song[0].children[2]);

    event.target.classList.toggle('fa-play');
    event.target.classList.toggle('fa-stop');
    if(event.target.classList.contains('fa-stop')){
      song[0].children[2].play();
      header[0].innerHTML = 'Now Playing: ' + songName[0].innerHTML;
    }
    else {
      song[0].pause();
      header[0].innerHTML = 'Select a song';
    }

  });
}

//button[1].addEventListener('click', function(event){
//
//  console.dir(event);
//  console.log(event.target);
//  console.dir(event.target);
//  console.log(button);
//  event.target.classList.toggle('fa-play');
//  button[1].classList.toggle('fa-stop');
//  if(button[1].classList.contains('fa-stop')){
//    song[1].play();
//    header[0].innerHTML = 'Now Playing: ' + songName[1].innerHTML;
//  }
//  else {
//    song[1].pause();
//    header[0].innerHTML = 'Select a song';
//  }
//
//});
//
//button[2].addEventListener('click', function(event){
//
//  console.dir(event);
//  console.log(event.target);
//  console.dir(event.target);
//  console.log(button);
//  event.target.classList.toggle('fa-play');
//  button[2].classList.toggle('fa-stop');
//  if(button[2].classList.contains('fa-stop')){
//    song[2].play();
//    header[0].innerHTML = 'Now Playing: ' + songName[2].innerHTML;
//  }
//  else {
//    song[2].pause();
//    header[0].innerHTML = 'Select a song';
//  }
//
//});
//
//button[3].addEventListener('click', function(event){
//
//  console.dir(event);
//  console.log(event.target);
//  console.dir(event.target);
//  console.log(button);
//  event.target.classList.toggle('fa-play');
//  button[3].classList.toggle('fa-stop');
//  if(button[3].classList.contains('fa-stop')){
//    song[3].play();
//    header[0].innerHTML = 'Now Playing: ' + songName[3].innerHTML;
//  }
//  else {
//    song[3].pause();
//    header[0].innerHTML = 'Select a song';
//  }
//
//});
//
