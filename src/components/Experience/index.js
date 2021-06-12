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
                        <ExperienceH2>Software Engineer Intern @ Investopedia</ExperienceH2>
                        <br></br>
                        <ExperienceP>
                            <li>Developed new features for back-end of web application and fixed bugs found in the application</li>
                            <br></br>
                            <li>Improved the performance of web applications utilized by <b>100 million</b> users per month </li>
                            <br></br>
                            <li>Created endpoints for application and deployed them using <b>AWS</b></li>
                            <br></br>
                            <li>Designed automation and unit tests using <b>JUnit</b> to tackle edge cases </li>
                        </ExperienceP>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceH2>Programming Instructor @ Hatch</ExperienceH2>
                        <br></br>
                        <ExperienceP>
                            <li>Worked with a team to instruct <b>JavaScript</b> to a large group of students</li>
                            <br></br>
                            <li>Corrected common syntax errors and collaborated with others to work through bugs</li>
                            <br></br>
                            <li>Communicated common issues with others and prevented further issues by implementing a new approach</li>
                        </ExperienceP>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceH2>Robotics Engineering Instructor @ FIRST Robotics</ExperienceH2>
                        <br></br>
                        <ExperienceP>
                           <li>Supported the programming task force at TL Kennedy with debugging code written in <b>Python</b></li>
                           <br></br>
                           <li>Identified hardware issues in the robot and developed solutions</li>
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
