import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
  body {
    font-family: "Montserrat";
  font-weight: 400;
  background: linear-gradient(60deg, #daa520 0%, #b73239 100%) no-repeat;
  color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  }
`
