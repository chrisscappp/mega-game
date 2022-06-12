import React from 'react'
import { getRandomIntSkoko } from '../../Constants/functions/getRandomIntSkoko'
import { getRandomIntSeychas } from '../../Constants/functions/getRandomIntSeychas'
import { playLightGame } from '../../Constants/functions/playLightGame'
import { playMediumGame } from '../../Constants/functions/playMediumGame'
import { playHardGame } from '../../Constants/functions/playHardGame'
import { numbers } from '../../Constants/numbers'

export const Modal = ({viewModal, setViewModal, playerData, levelData}) => {

    const skokoNado = getRandomIntSkoko(30, 60)
    let chichasVKyche = getRandomIntSeychas(13)

    const gameElements = {
        kuchaSkokoNabrat: skokoNado,
        kuchaSkokoSeychas: chichasVKyche,
        whoseMove: "",
        playerData: playerData,
        enemy: "",
        test123: false,
        numbersForGame: {
            plus1: Math.floor(Math.random() * numbers.length),
            plus2: Math.floor(Math.random() * numbers.length),
            multiply: Math.floor(Math.random() * numbers.length),
        }
    } // Сделать через стейт

    // getRandomIntSkoko(30, 60) скоко набрать
    // getRandomIntSeychas(13) скоко сейчас
    
    const [enemyRate, setEnemyRate] = React.useState(true)

    let kuchaSeychas = chichasVKyche

    const [kucha, setKucha] = React.useState(kuchaSeychas)

    const strCountKucha = String(gameElements.kuchaSkokoNabrat)
    let howManyStones = "камней"

    if (2 <= Number(strCountKucha[1]) && Number(strCountKucha[1] <= 4)) {
        howManyStones = "камня"
    }

    if (1 === Number(strCountKucha[1])) {
        howManyStones = "камень"
    }

    if (levelData?.title === "Лёгкий") {
        playLightGame(gameElements, enemyRate, setEnemyRate, numbers)
    } else if (levelData?.title === "Средний") {
        playMediumGame(gameElements, enemyRate, setEnemyRate, numbers)
    } else if (levelData?.title === "Сложный") {
        playHardGame(gameElements, enemyRate, setEnemyRate, numbers)
    }

    const handleChangeKucha1 = () => {
        gameElements.kuchaSkokoSeychas += gameElements.numbersForGame.plus1 + 1
        console.log('sum', test)
        setKucha(kucha + gameElements.numbersForGame.plus1 + 1)
    }

    const handleChangeKucha2 = () => {
        gameElements.kuchaSkokoSeychas += gameElements.numbersForGame.plus2 + 1
        console.log('sum', test)
        setKucha(kucha + gameElements.numbersForGame.plus2 + 1)
    }

    const handleChangeKucha3 = () => {
        gameElements.kuchaSkokoSeychas *= (gameElements.numbersForGame.multiply + 1)
        console.log('sum', test)
        setKucha(kucha * (gameElements.numbersForGame.multiply + 1))
    }

    return (
        <>
            <div className = "modal-wrapper">
                <div className = "modal-container">
                <button type="button" className="closeModal" aria-label="Close" onClick = {() => setViewModal(!viewModal)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                    <div>
                    { 
                        playerData.name === "Ваня" 
                    ?
                        <h3>Вы играете против Пети</h3>
                    :
                        <h3>Вы играете против Вани</h3>
                    }
                    { 
                        gameElements?.kuchaSkokoNabrat
                    ?
                        <h3>Нужно набрать: {skoko} {howManyStones}</h3>
                    :
                        null
                    }
                    {
                        <h3>Ход: {gameElements?.enemy}</h3>
                    }
                    </div>
                    <div className = "modal-container__kucha-container">
                        { 
                            gameElements?.kuchaSkokoSeychas >= 0
                        ?
                            <h3 className = "modal-container__kucha-container__text">Камней в куче: {kucha}</h3>
                        :
                            null
                        }
                    </div>
                    <div className = "gameButtons-container"> 
                        <div className = "gameButtons-container__button-1">
                            <button className = "gameButtons-container__button-1__item styleGameButton" onClick = {() => handleChangeKucha1()}>
                                + {numbers[gameElements?.numbersForGame?.plus1]}
                            </button>
                        </div>
                        <div className = "gameButtons-container__button-2__item styleGameButton" onClick = {() => handleChangeKucha2()}>
                            <button>
                                + {numbers[gameElements?.numbersForGame?.plus2]}
                            </button>
                        </div>
                        <div className = "gameButtons-container__button-3__item styleGameButton" onClick = {() => handleChangeKucha3()}>
                            <button>
                                * {numbers[gameElements?.numbersForGame?.multiply]}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}