let buttons = document.querySelectorAll(".drum");
let noOfButtons = buttons.length;
let audio1 = new Audio("sounds/tom-1.mp3");

for (let i = 0; i < noOfButtons; i++) {
        buttons[i].addEventListener("click", function(){
        audio1.play();
    });
    
}