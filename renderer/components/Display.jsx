import styled from 'styled-components'

const Styled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 2em;
  box-sizing: border-box;
  overflow: hidden;

  .bpm {
  font-size: 1.5em;
  font-weight: inherit;
}

.bpm-span {
  padding: 1em;
  text-align: center;
  border: 2px solid white;
  border-radius: 50px;
}
`

export const Display = ({bpm}) => (
  <Styled>
      <span className="bpm-span">
        <h1 id="bpm" className="bpm">{bpm}</h1>
        <p className="bpm-tag">BPM</p>
      </span>
    </Styled>
)