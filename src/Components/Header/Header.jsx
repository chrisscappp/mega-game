import React from 'react'

export const Header = ({headerTitle}) => {
    return (
        <>
            <div className = "header-container">
                    <div className = "home-container__header">
                        <div className = "home-container__header-text-container">
                            <div className = "home-container__header-text-container__text">
                                {headerTitle}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}