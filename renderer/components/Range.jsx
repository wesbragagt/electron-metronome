import styled from 'styled-components'
const Input = styled.input`
  
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  background: transparent; /* Otherwise white in Chrome */
  width: 40%;


&:focus {
  outline: none;
}

&::-ms-track {
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 1.5em;
  width: 0.75em;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  margin-top: -0.6em;
}

&::-moz-range-thumb {
  -webkit-appearance: none;
  height: 1.5em;
  width: 0.75em;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  margin-top: -0.6em;
}

&::-ms-thumb {
  -webkit-appearance: none;
  height: 1.5em;
  width: 0.75em;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  margin-top: -0.6em;
}

&::-webkit-slider-runnable-track {
  height: 2px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
}

&::-moz-range-track {
  height: 2px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
}

&::-ms-track {
  height: 2px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
}
`



export const Range = (props) => {
  return (
    <Input type='range' step={1} {...props}/>
  )
}