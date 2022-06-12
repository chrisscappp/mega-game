import { numbers } from '../numbers'

export const goGame = (gameElements) => {

    if (gameElements.playerData.name === "Ваня") {
        gameElements.whoseMove = "Петя"
    } else {
        gameElements.whoseMove = "Ваня"
    }

    console.log(gameElements);
}