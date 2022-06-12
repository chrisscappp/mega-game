import React from 'react'
import { NavLink } from 'react-router-dom'

export const StartGameButton = () => {
    return (
        <>
            <div className = "start-game-container">
                    <div className = "start-game-container__rectangle">
                        <div className = "start-game-container__rectangle-container">
                            <NavLink to = "/gameZone" className="inactive" activeclassname="active">
                                <div className = "start-game-container__rectangle-container__text">
                                    Начать игру
                                </div>
                            </NavLink>
                        </div>
                    </div>
            </div>
        </>
    )
}