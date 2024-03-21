import Styled from 'styled-components'

export const NotFoundContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const NotFoundHeading = Styled.h1`
  color: #64748b;
  font-size: 33px;
  font-family: 'Roboto';
`

export const NotFoundPara = Styled.p`
  color: #7b8794;
  font-size: 15px;
  font-family: 'Roboto';
`

export const Img = Styled.img`
  height: 250px;
  width: 250px;
`

export default NotFoundContainer
