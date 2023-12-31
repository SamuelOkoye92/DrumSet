let buttons = document.querySelectorAll(".drum");
let noOfButtons = buttons.length;

for (let i = 0; i < noOfButtons; i++) {
   buttons[i].addEventListener("click", function(){

        let buttonInnerHTML = this.innerHTML;
        drumSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
   });
};


document.addEventListener('keydown', function(event){
   drumSound(event.key);
   buttonAnimation(event.key);
});


function drumSound(sound){

switch (sound) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

  case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

  case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

  case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

  case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

  case "l":
    let drum7 = new Audio('sounds/kick-bass.mp3');
    drum7.play();
    break;


  default: console.log(sound);

};
};


function buttonAnimation(currentKey) {
let selectedButton = document.querySelector('.'+ currentKey);
selectedButton.classList.add('pressed');

setTimeout(function(){
   selectedButton.classList.remove('pressed');
}, 100);
};


        
    