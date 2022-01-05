import React from 'react'
import { Button } from 'react-bootstrap';
import HeroSection from '../styles/HeroSection'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="../public/videos/Startseite.mp4" Autoplay loop muted />
            <h1>Renting</h1>
            <p>Now!</p>
            <div className='hero-btns'>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch Trailer</Button>
            </div>
        </div>

    )
}

export default HeroSection
