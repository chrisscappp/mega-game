import React from 'react'
import {Header} from '../../Components/Header/Header'
import {Zamanilovka} from '../../Components/Zamanilovka/Zamanilovka'
import {StartGameButton} from '../../Components/StartGameButton/StartGameButton'
import { StonesFooter } from '../../Components/StonesFooter/StonesFooter'

const Home = () => {

    const headerTitle = "Камни бесконечности - The Game 228"

    return (
        <>
            <div className = "home-wrapper">
                <Header headerTitle = {headerTitle} />
                <Zamanilovka />
                <StartGameButton />
                <StonesFooter />
            </div>
        </>
    )
}

export default Home