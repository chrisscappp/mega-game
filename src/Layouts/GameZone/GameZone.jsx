import React from 'react'
import {Header} from '../../Components/Header/Header'
import {WhoPlay} from '../../Components/WhoPlay/WhoPlay'
import {Players} from '../../Components/Players/Players'
import {Levels} from '../../Components/Levels/Levels'
import {Modal} from '../../Components/Modal/Modal'

const GameZone = () => {

    const [playerData, setPlayerData] = React.useState({})
    const [levelData, setLevelData] = React.useState({})
    const [viewModal, setViewModal] = React.useState(false)
    const headerTitle = "Game Zone"

    console.log();

    return (
        <>
            <div className = "gameZone-wrapper">
                <Header headerTitle={headerTitle}/>
                <WhoPlay />
                <Players 
                    setPlayerData = {setPlayerData}
                />
                <Levels 
                    playerData = {playerData}
                    setLevelData = {setLevelData}
                    viewModal = {viewModal}
                    setViewModal = {setViewModal}
                />
                {viewModal && playerData.name
                ?
                    <Modal
                        playerData = {playerData}
                        levelData = {levelData}
                        viewModal = {viewModal}
                        setViewModal = {setViewModal}
                    />
                :
                    null
                }
            </div>
        </>
    )
}

export default GameZone