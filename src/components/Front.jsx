import React from 'react'
import '../styles/front.scss'

function Front() {
    return (
        <>
            <div className='wrapper'>
                <image className='image'>slogansloganslogansloganslogansloganslogansloganslogansloganslogan</image>
                <div className='frontboxes'>
                    <div className='frontbox'>
                        <h1>O NAS</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='frontbox'>
                        <h1>OFERTA</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='frontbox'>
                        <h1>KONTAKT</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='secondbox'>
                    <image className='imagebox'>IMG</image>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>REALIZACJE</p>
                    </div>
                </div>
                    <p>Z KIM WSPÓŁPRACOWALIŚMY</p>
                <div className='thirdboxes'>
                    <div className='thirdbox'>1.</div>
                    <div className='thirdbox'>2.</div>
                    <div className='thirdbox'>3.</div>
                </div>
            </div>
        </>
    )
}

export default Front
