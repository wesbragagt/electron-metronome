import styled from 'styled-components'

const Styled = styled.div`
font-family: inherit;
  font-weight: 500;
  background: none;
  box-sizing: border-box;
  color: inherit;
  border: 1px solid white;
  border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
  input[type="number"]{
    background-color: transparent;
    color: #fff;
    padding: 0px;
    border: initial;
    font: inherit;
    margin: 0px;
    text-align: center;
    width: 34px;
  }
  input[type="number"]:focus{
    outline: none;
  }
`

export const ChangeBy = ({value, onChange}) => (
  <Styled>
    <label htmlFor="">Change</label>
    <input min='1' max='12' type='number' value={value} onChange={onChange}/>
  </Styled>
)