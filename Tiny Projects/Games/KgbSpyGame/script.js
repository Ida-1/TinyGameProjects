function livingEnemies(){
    return document.querySelectorAll(".enemy:not(.dead)");
}
var healthPoints = 100;

function updayeHealthPoints(points) {

    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");

    healthBar.style.width = points + "%";

    if(healthPoints < 1) {
        alert("Game over!");
        window.location.reload();
    }
}

function enemyShootsMe(enemy){

    if(!enemy.classList.contains("dead")) {
    
        enemy.classList.add("shooting");
        updayeHealthPoints(healthPoints - 20);

         setTimeout( ()=> {
             enemy.classList.remove("shooting");
        },200);
    }    
}


function enemyAttacksMe(enemy) {

    enemy.classList.add("showing");
    setTimeout( ()=> {
        enemyShootsMe(enemy);
    },1000);

    setTimeout( ()=> {
        enemy.classList.remove("showing");
    },3000);
}

function iShoot(enemy){

    enemy.classList.add("dead");
        
    if(!livingEnemies().length) {
        alert("You got the russians! well done")
        window.location.reload();

    }
}
function randomEnemyAttacks(){
    var randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies()[randomEnemyNo];

    var randomDelay = Math.random() * 2000 + 1000;


    setTimeout( ()=> {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);
}
