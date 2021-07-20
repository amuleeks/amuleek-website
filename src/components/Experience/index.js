import React from 'react'
import {
    ExperienceContainer,
    ExperienceH1,
    ExperienceWrapper,
    ExperienceCard,
    ExperienceH2,
    ExperienceP
} from './ExperienceElements';

const Experience = () => {

    return (
        <>
            <ExperienceContainer id="experience">
            <ExperienceH1>Experience</ExperienceH1>
                <ExperienceWrapper>
                    <ExperienceCard>
                        <ExperienceH2>Software Development Engineer Intern @ Investopedia</ExperienceH2>
                        <br></br>
                        <ExperienceP>
                            <li>Implemented script using <b>Java</b> and <b>Keycloak REST API</b> that adds confidential clients to Keycloak authentication to allow SSO integration between various websites </li>
                            <br></br>
                            <li>Improved the performance of web applications utilized by 100 million users per month by <b>30%</b> by creating an efficient algorithm to process data </li>
                            <br></br>
                            <li>Created endpoints for <b>15+</b> verticals and deployed them using <b>AWS Lambda</b></li>
                            <br></br>
                            <li> Developed custom exceptions to help identify and eliminate bugs found in code and to increase overall readability  </li>
                        </ExperienceP>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceH2>JavaScript Coach @ Hatch</ExperienceH2>
                        <br></br>
                        <ExperienceP>
                            <li>Worked with a team to instruct <b>JavaScript</b> to a group of <b>40+</b> students</li>
                            <br></br>
                            <li>Corrected common syntax errors and collaborated with others to work through bugs</li>
                            <br></br>
                            <li>Communicated common issues with others and prevented further issues by implementing a new approach</li>
                        </ExperienceP>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceH2>Robotics Team Lead @ FIRST Robotics</ExperienceH2>
                        <br></br>
                        <ExperienceP>
                           <li>Supported the programming task force at TL Kennedy with debugging code written in <b>Python</b></li>
                           <br></br>
                           <li>Improved precise movement coordination of robot's arm navigation by 70% by determining the joint angles</li>
                           <br></br>
                           <li>Competed at the ONT District Event, achieved the <b>17th rank</b> in the entire district</li>
                        </ExperienceP>
                    </ExperienceCard>
                </ExperienceWrapper>
            </ExperienceContainer>  
        </>
    )
}

export default Experience
