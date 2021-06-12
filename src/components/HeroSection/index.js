import React, {useState} from 'react'
import Img1 from '../../images/img1-1.jpg'
import {Button} from '../ButtonElement'
import {
    HeroContainer, 
    HeroBg, 
    ImgBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowRight, 
    ArrowForward
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImgBg src={Img1}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Amuleek Simak</HeroH1>
                <HeroP>Software Engineer</HeroP>
                <HeroBtnWrapper>
                    <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Contact me {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
