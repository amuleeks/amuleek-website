import React from 'react'
import {FaBars} from 'react-icons/fa'
import Resume from "../../resources/Resume.pdf"
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
    return (
       <>
            <Nav>
                <NavbarContainer>
                    {/* this is the logo on the navbar */}
                    <NavLogo to="/">Amuleek</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            {/* this is the links on the navbar */}
                            <NavLinks to='about'> About </NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* this is the links on the navbar */}
                            <NavLinks to='experience'> Experience </NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* this is the links on the navbar */}
                            <NavLinks to='projects'> Projects </NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* this is the links on the navbar */}
                            <NavLinks to='contact'> Contact </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <a href={Resume} target="_blank" rel='noopener noreferrer' style={{textDecoration: 'none', color: '#220504'}}>
                        <NavBtn>
                            <NavBtnLink> Resume </NavBtnLink>
                        </NavBtn>
                    </a>
                </NavbarContainer>
            </Nav>
       </>
    )
}

export default Navbar
