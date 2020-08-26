import styled from 'styled-components'
const Styled = styled.div`
  margin: 32px auto;
  padding: 2em;
  width: 30%;
  border: 2px solid white;
  border-radius: 50px;
  box-sizing: border-box;
  overflow: hidden;
  .bpm{
  display: flex;
  justify-content: center;
  text-align: center;

  input[type="text"]{
    background-color: transparent;
    color: #fff;
    padding: 0px;
    border: initial;
    font: inherit;
    margin: 0px;
    text-align: center;
    width: 34px;
  }

  input[type="text"]:focus{
    outline: none;
  }
  }
  .change{
    font-family: inherit;
    font-weight: 500;
    background: none;
    box-sizing: border-box;
    color: inherit;
    border: 1px solid white;
    border-radius: 5px;
    text-align: center;

    label{
      font-size: .8rem;
    }

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
  }
`

export const Display = ({bpm, onChange, changeByValue, changeByHandler}) => (
    <Styled>
      <div className='bpm'>
        <input type='text' id="bpm" className="bpm" value={bpm} onChange={onChange}/>
        <p>BPM</p>
      </div>
      <div className='change'>
        <label htmlFor="">change by:</label>
        <input min='1' max='12' type='number' value={changeByValue} onChange={changeByHandler}/>
      </div>
    </Styled>
)