export const playLightGame = (gameElements, enemyRate, setEnemyRate) => {

    if (gameElements.playerData.name === "Ваня") {
        gameElements.enemy = "Петя"
    } else {
        gameElements.enemy = "Ваня"
    }
    
    if (enemyRate) {
        console.log("Ход врага");
    }

    if (!enemyRate) {
        console.log("Твой ход")
    }

}