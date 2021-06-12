import React from 'react'
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import Icon3 from '../../images/icon3.png'
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsP
} from './ProjectsElements';

const Projects = () => {

    return (
        <>
            <ProjectsContainer id="projects">
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsWrapper>
                    <a href='https://github.com/hackthenorth2020' style={{textDecoration: 'none', color: '#220504'}}>
                        <ProjectsCard>
                        <ProjectsIcon src={Icon1}/>
                            <ProjectsP>
                                <h2>Mntr</h2>
                                <br></br>
                                Web application used to assist students to find mentors using an algorithm to find the best fit. <b>Golang</b> was used to create the data models and interfaces for the structs.
                            </ProjectsP>
                        </ProjectsCard>
                    </a>
                    <a href='https://github.com/4rgc/eduCater' style={{textDecoration: 'none', color: '#220504'}}>
                        <ProjectsCard>
                            <ProjectsIcon src={Icon2}/>
                            <ProjectsP>
                                <h2>eduCater</h2>
                                <br></br>
                                Education platform made for students to ask professors questions about what they are learning 
                                in class directly on the slides. The backend was implemented using <b>JavaScript</b>
                                </ProjectsP>
                        </ProjectsCard>
                    </a>
                    <a href='https://github.com/amuleeks/Yotei' style={{textDecoration: 'none', color: '#220504'}}>
                        <ProjectsCard>
                            <ProjectsIcon src={Icon3}/>
                            <ProjectsP>
                                <h2>Yotei</h2>
                                <br></br>
                                Reminders application that sends you reminders at locations set by the client.
                                This was implemented using <b>Swift</b> and <b>Firebase</b> was utilized for the login system.
                            </ProjectsP>
                        </ProjectsCard>
                    </a>
                </ProjectsWrapper>
            </ProjectsContainer>  
        </>
    )
}

export default Projects
