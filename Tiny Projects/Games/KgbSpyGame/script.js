function enemyAttacksMe(enemy) {

    enemy.classList.add("showing");

    setTimeout( ()=> {
        enemyShootsMe(enemy);
    }, 1000);

    setTimeout( ()=> {
        enemy.classList.remove("showing");
    }, 3000);
 }   

 function enemyShootsMe(enemy) {
    enemy.classList.add("shooting");

    setTimeout( ()=> {
        enemy.classList.remove("shooting");
    }, 200);
}
function livingEnemies(){

    return document.querySelectorAll(".enemy:not(.dead)");
}

function randomEnemyAttacks() {
    var randomEnemyNo = Math.random()* livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies()[randomEnemyNo];

    var randomDelay = Math.random() * 2000 + 1000;

    setTimeoout( ()=> {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);
}
