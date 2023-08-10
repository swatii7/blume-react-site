import React from 'react'
import footerLogo from '../../assets/Logo/logo-white.svg'

function Footer() {
    return (
        <div className='footerContainer'>
            <div>
                <img src= {footerLogo} className='mb-20' />

            <p className='fs-14 mb-20'>Privacy Policy</p>
            <p className='fs-14 mb-20'>
            Terms & Conditions
            </p>
            <p className='fs-14 mb-20'>
            hi@blume.com | press@blume.com | wholesale@blume.com | 1-888-272-6718
            </p>
            <p className='fs-14 mb-20' style={{opacity: '0.5'}}>
            Blume is in no way affiliated with Judy Blume
            </p>
            </div>
        </div>
    )
}

export default Footer