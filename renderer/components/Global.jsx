import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
  body {
    font-family: "Helvetica";
  font-weight: 400;
  background: linear-gradient(60deg,#205ada 0%,#32b7a5 100%) no-repeat;
  color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  }
`
