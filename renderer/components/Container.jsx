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
`

export const Container = ({children}) => (<Styled>{children}</Styled>)