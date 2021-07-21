import React from 'react'
import Resume from "../../resources/Resume.pdf"
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>  
                    <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>  
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink> 
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink> 
                </SidebarMenu>
                <a href={Resume} target="_blank" rel='noopener noreferrer' style={{textDecoration: 'none', color: '#220504'}}>
                    <SideBtnWrap>
                        <SidebarRoute>Resume</SidebarRoute>
                    </SideBtnWrap>
                </a>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar
