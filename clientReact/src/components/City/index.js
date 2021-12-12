import styled from "styled-components";

export const CitiesAll = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

`

export const City = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px dotted palevioletred;
    color: black;
    margin: 2em 2em;
    padding: 0.25em 1em;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1em;
    &:hover {
        background-color: lightblue;
        font-size:1.1em;
    }

 
`

export const CityHeader= styled.h1 `
  color:DarkSlateGrey;
  font-size:3em;
  display:flex;
  align-items: center;
  justify-content: center;

`
