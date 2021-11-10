var charcter = document.getElementById('character');

function moveLeft(){
    let left = parseInt(window.getComputedStyle(csharcter).getPropertyValue("left"));
    left -= 100;
    if (left <= 0){
        charcter.style.left = left + "px";
    }
}

function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if (left < 300){
        character.style.left = left + "px";
    }
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {moveLeft();}
    if (event.key === "ArrowRight") {moveRight();}
});

var block = document.getElementById("block");
block.addEventListener('animationiteration', ()
=> {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
});