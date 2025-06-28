const audio = document.querySelectorAll(`.drum`);
audio[0].addEventListener("click", function() {
    const a1= new Audio("sounds/tom-1.mp3");
    a1.play();
    
});
audio[1].addEventListener("click", function() {
    const a2 = new Audio("sounds/tom-2.mp3");
    a2.play();
});
audio[2].addEventListener("click", function() {
    const a3 = new Audio("sounds/tom-3.mp3");
    a3.play();
});
audio[3].addEventListener("click", function() {
    const a4 = new Audio("sounds/tom-4.mp3");
    a4.play();
});
audio[4].addEventListener("click", function() {
    const a5 = new Audio("sounds/snare.mp3");
    a5.play();
});
audio[5].addEventListener("click", function() {
    const a6 = new Audio("sounds/crash.mp3");
    a6.play();
});
audio[6].addEventListener("click", function() {
    const a7 = new Audio("sounds/kick-bass.mp3");
    a7.play();
});
var currentkey = document.querySelectorAll(`.key`);
document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case "w":
            const a1 = new Audio("sounds/tom-1.mp3");
            a1.play();
            break;
        case "a":
            const a2 = new Audio("sounds/tom-2.mp3");
            a2.play();
            break;
        case "s":
            const a3 = new Audio("sounds/tom-3.mp3");
            a3.play();
            break;
        case "d":
            const a4 = new Audio("sounds/tom-4.mp3");
            a4.play();
            break;
        case "j":
            const a5 = new Audio("sounds/snare.mp3");
            a5.play();
            break;
        case "k":
            const a6 = new Audio("sounds/crash.mp3");
            a6.play();
            break;
        case "l":
            const a7 = new Audio("sounds/kick-bass.mp3");
            a7.play();
            break;
    }
});
currentkey.forEach(function(key) {
    key.addEventListener("click", function() {
        this.classList.add("pressed");
        setTimeout(() => {
            this.classList.remove("pressed");
        }, 100);
    });
});