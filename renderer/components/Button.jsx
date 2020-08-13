import styled from 'styled-components'

const Styled = styled.button`
  
  font-family: inherit;
  font-weight: 500;
  background: none;
  padding: 0.5em 2em;
  margin: 1.5em 2em;
  box-sizing: border-box;
  color: inherit;
  border: 1px solid white;
  border-radius: 5px;


&:focus {
  outline: none;
}

&:hover {
  cursor: pointer;
  mix-blend-mode: screen;
  background: white;
  color: #b73239;
}
`

export const Button = (props) => (
  <Styled {...props}/>
)