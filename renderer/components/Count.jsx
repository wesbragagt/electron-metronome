import styled from "styled-components"

const Styled = styled.div`
display: flex;
flex: 1;
justify-content: center;
& > *:not(:last-child){
  margin-right: 1rem;
}
div[class^="circle-"]{
  width: 30px;
  height: 30px;
  padding: 1rem;
  border: 2px solid white;
  border-radius: 100vw;
}
`


export const Count = ({beatsPerMeasure, intervalMS}) => {
  let Circles = []
  for(let i = 0; i < beatsPerMeasure; i++){
    Circles.push(
      i + 1
    )
  }
  
  return (
    <Styled>
      {Circles.map(number => (<div key={`circle-${number}`} className={`circle-${number}`}></div>))}
    </Styled>
  )
}