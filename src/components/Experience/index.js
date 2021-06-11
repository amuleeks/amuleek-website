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
                        <ExperienceH2>Programming Instructor @ Hatch</ExperienceH2>
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
                        <ExperienceP>
                           <li>Supported the programming task force at TL Kennedy with debugging code written in <b>Python</b></li>
                           <br></br>
                           <li>Identified hardware issues in the robot and developed solutions</li>
                           <br></br>
                           <li>Competed at the ONT District Event, achieved the <b>17th rank</b> in the entire district</li>
                        </ExperienceP>
                    </ExperienceCard>
                    <ExperienceCard>
                        <ExperienceH2>Mathematics Instructor @ Kumon</ExperienceH2>
                        <ExperienceP>
                           <li>Educated large groups with diverse skill levels about advanced math skills and <b>algorithms</b></li>
                           <br></br>
                           <li>Exceeded the performance threshold set out by the organization</li>
                           <br></br>
                           <br></br>
                           <br></br>
                           <br></br>
                        </ExperienceP>
                    </ExperienceCard>
                </ExperienceWrapper>
            </ExperienceContainer>  
        </>
    )
}

export default Experience
