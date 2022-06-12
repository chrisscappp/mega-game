import React from 'react'

export const PlayerButton = ({player, setPlayerData}) => {

    const choiceName = (data) => {
        setPlayerData(data)
        alert(`Вы играете за ${data.name}`)
    }

    return (
        <>
            <div className = "players-container__rectangle-container">
                <div className = "players-container__rectangle-container__text" onClick = {() => choiceName(player)}>
                    {player.name}
                </div>
            </div>
        </>
    )
}