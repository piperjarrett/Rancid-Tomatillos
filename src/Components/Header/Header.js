import React from 'react'

const Header = ({ getheadermovie }) => {
    return (
        <header>
            <h1>Rancid Tomatillos</h1>
            <img getheadermovie={getheadermovie}/>
        </header>
    )
}

export default Header