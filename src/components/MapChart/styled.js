import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  justify-content: space-between;
`

export const Strong = styled.strong`
  color: white;
`

export const ListVariants = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

export const Select = styled.select`
  width: 100%;
  text-align: center;
  height: 3vh;
  font-weight: 600;
  border-radius: 15px;
  margin-top: 5%;
  border: 0px;

  :hover{
    outline: 0px;
    cursor: pointer;
  }
`

export const ButtonDiv = styled.div`
  width: 70%;
`

export const Button = styled.button`
  height: 4vh;
  width: 10%;
  border: 2px solid white;
  background-color: #84b9c1;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 15px;
  color: white;

  :hover{
    background-color: white;
    color: #84b9c1;
    cursor: pointer;
  }
`

export const DateDiv = styled.div`
  width: 70%;
  height: 3vh;
  display: flex;
  align-items: center;
  margin-bottom: 1%;
`

export const H3 = styled.p`
  width: 9%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 3vh;
  border: 2px solid white;
  color: white;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  :hover{
    background-color: white;
    color: #84b9c1;
    cursor: pointer;
  }
`

export const Input = styled.input`
  width: 70%;
  padding: 10px 0px 10px 0px;

  :hover{
    cursor: pointer;
  }
`
