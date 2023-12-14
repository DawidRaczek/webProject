import React from 'react'
import '../styles/header.scss'

function Header() {
    return (
        <>
            <header className='header'>
                <div className='headerleft'>
                    <h1 className='title'>AUTOMAT</h1>
                </div>
                <div className='headerright'>
                    <p className='headerrightnav'>OFERTA</p>
                    <p className='headerrightnav'>O NAS</p>
                    <p className='headerrightnav'>KONTAKT</p>
                    <p className='headerrightnav'>REALIZACJE</p>
                </div>
            </header>
        </>
    )
}

export default Header
