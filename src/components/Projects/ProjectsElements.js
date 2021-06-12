import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #EF6C6C;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto;
    align-items: center;
    grid-gap: 16px;
    padding: 0 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;


export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
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

export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin: 15px;

    @media screen and (max-width: 480px) {
        height: 100px;
        width: 100px;
    }
`;

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 60px;
    margin-top: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH2Wrapper = styled.div`
    text-align: center;
    margin-bottom: 100px;
`

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    text-align: center;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: left-align;
    margin: 10px;
    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;