import React from 'react'
import { playerNames } from '../../Constants/playerNames'
import {PlayerButton} from '../PlayerButton/PlayerButton'

export const Players = ({setPlayerData}) => {
    return (
        <>
            <div className = "players-container">
                <div className = "test">
                    {playerNames?.map((player) => {
                        return (
                            <div style = {{
                                    width: player.style.width, 
                                    height: player.style.height, 
                                    background: player.style.background1, 
                                    background: player.style.background2
                                }} 
                                className = "players-container__rectangle" 
                                key = {player.id}
                                >
                                <PlayerButton player={player} setPlayerData={setPlayerData} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}