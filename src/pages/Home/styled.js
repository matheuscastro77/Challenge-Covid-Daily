import styled from "styled-components";
import background from '../../assets/BackGround.png'

export const Main = styled.main`
    background-image:url(${background});
    background-size: cover;
    height: 100vh;
    width: 100%;
`

export const Container = styled.div`
    display: flex;
`

export const Tittle = styled.div`
    width: 27%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    justify-content: space-around;
    margin-left: 5%;
`

export const H1 = styled.h1`
    color: white;
    font-size: 3rem;
    text-align: center;
    margin: 2%;
`

export const H2 = styled.h2`
    color: white;
    font-size: 2rem;
    text-align: center;
`

export const Button = styled.button`
    width: 33%;
    height: 7vh;
    font-size: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    background-color: transparent;
    border-radius: 15px;
    border: 4px solid white;
    margin-top: 5%;

    :hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: 0.5s;
    }    
`