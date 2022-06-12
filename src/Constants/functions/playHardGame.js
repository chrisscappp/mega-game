export const playHardGame = (gameElements, enemyRate, setEnemyRate) => {

    if (gameElements.playerData.name === "Ваня") {
        gameElements.enemy = "Петя"
    } else {
        gameElements.enemy = "Ваня"
    }

    console.log(gameElements);

}