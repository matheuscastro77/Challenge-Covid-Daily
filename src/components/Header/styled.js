import styled from "styled-components";

export const Main = styled.div`
    height: 9.5vh;
    width: 100%;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Img = styled.img`
    width: 4.5%;
    margin-left: 1%;
`

export const H1 = styled.h1`
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Container = styled.h4 `
    margin-right: 3%;
    display: flex;
    flex-direction: row;
    height: 3vh;
    align-items: center;
    width: 12%;
    justify-content: space-between;

    @media screen and (max-width: 1024px){
        width: 15%;
    }

    @media screen and (max-width: 1600px){
        width: 15%;
    } 
`

export const H4 = styled.h4 `
    font-weight: 600;
    font-size: 1rem;
    color: white;
    background-color: transparent;
    border: 0px;
    :hover {
        cursor: pointer;
        border-bottom: 1px solid white;
    }

    @media screen and (max-width: 1024px){
        font-size: 0.9rem;
    }

    @media screen and (max-width: 1366px){
        font-size: 0.9rem;
    }
    
`