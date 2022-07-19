var drums = document.querySelectorAll(".drum");

//Detecting button press
for(let i=0;i<drums.length;i++){

    drums[i].addEventListener("click", function () {
        
        let buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting key press
document.addEventListener("keydown", function (event) {
    let keyPress = event.key;
    playSound(keyPress);
    buttonAnimation(keyPress);
})

function playSound(key) {

    switch (key) {
        case "w":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "a":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "s":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "d":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "j":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "l":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
            break;
    } 
}

function buttonAnimation(currentKey) {

    let buttonPressed = document.querySelector("." + currentKey);
    buttonPressed.classList.add("pressed");

    setTimeout(function () {
        buttonPressed.classList.remove("pressed");
    },100);
    
}