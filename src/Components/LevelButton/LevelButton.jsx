import React from 'react'

export const LevelButton = ({button, setLevelData, viewModal, setViewModal, playerData}) => {

    const choiceLevelComplexity = (data) => {
        setViewModal(!viewModal)
        setLevelData(data)
        if (!playerData.name) {
            alert(`Выберите героя`)
        }
    }

    return (
        <>
            <div className = "levels-container__rectangle-container">
                <div className = "levels-container__rectangle-container__text">
                    <button className = "test3btn" onClick = {() => choiceLevelComplexity(button)}>
                        {button.title}
                    </button>
                </div>
            </div>
        </>
    )
}