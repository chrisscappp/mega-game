import React from 'react'
import { levelButtons } from '../../Constants/levelButtons'
import { LevelButton } from '../LevelButton/LevelButton'

export const Levels = ({setLevelData, viewModal, setViewModal, playerData}) => {
    return (
        <>
            <div className = "levels-container">
                <div className = "test2">
                    {levelButtons?.map((button) => {
                        return (
                            <div style = {{
                                width: button.style.width, 
                                height: button.style.height, 
                                background: button.style.background1, 
                                background: button.style.background2
                            }}
                            className = "levels-container__rectangle"
                            key = {button.id}
                            >
                                <LevelButton 
                                    button = {button} 
                                    setLevelData = {setLevelData} 
                                    viewModal = {viewModal}
                                    setViewModal = {setViewModal}
                                    playerData = {playerData}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}