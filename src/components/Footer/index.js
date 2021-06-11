import { IoLogoLinkedin, IoLogoOctocat, IoIosMail } from "react-icons/io";
import React from 'react'
import {
    FooterContainer, 
    FooterWrap, 
    SocialIcons, 
    SocialIconLink
} from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialIcons>
                    <SocialIconLink href="//www.linkedin.com/in/amuleeks/" target="_blank" aria-label="LinkedIn">
                        <IoLogoLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href="//www.github.com/amuleeks" target="_blank" aria-label="GitHub">
                        <IoLogoOctocat />
                    </SocialIconLink>
                    <SocialIconLink href="mailto:amuleeksimak@gmail.com" aria-label="Mail">
                        <IoIosMail />
                    </SocialIconLink>
                </SocialIcons>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
