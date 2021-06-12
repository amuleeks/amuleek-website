import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F9CAAD;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ExperienceWrapper = styled.div`
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-gap: 30px;
    padding: 0 50px;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
        padding: 0px 15px;
        margin: 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 30px;
        grid-gap: 10px;
    }
`;


export const ExperienceCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 450px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    margin-bottom: 10px;
    text-decoration: none;
    overflow: auto;

    @media screen and (max-width: 1300px) {
        padding: 30px 20px;
        max-height: 400px;
        overflow: auto;
    }

    @media screen and (max-width: 768px) {
        padding: 7px 15px;
        max-height: 220px;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

`;

export const ExperienceH1 = styled.h1`
    font-size: 2.5rem;
    color: #667994;
    margin-bottom: 60px;
    margin-top: 20px;

    @media screen and (max-width: 480px) {
    font-size: 2rem;
    }
`;

export const ExperienceH2 = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 5px;
    }
`;

export const ExperienceP = styled.p`
    font-size: 17px;
    text-align: left;
    
    @media screen and (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;