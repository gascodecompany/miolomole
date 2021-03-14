import styled from 'styled-components';

export const AboutUsSectionOne = styled.div`
  overflow-y: hidden;
  .container{
    padding-top: 100px;
    flex-direction: row;
    justify-content: center;
  }
`;

export const SectionOneImages = styled.div`
  position: relative;
  width: 503px;
  height: 364px;
  background: #C4C4C4;
  border-radius: 8px;
  display: block;
  margin-right: 30px;
  
  ::after{
    content: '';
    position: absolute;
    width: 170px;
    height: 184px;
    background: #531E1E;
    border-radius: 8px;
    top: -80px;
    left: -42px;
  }
`

export const ScetionOneText = styled.div`
  font-family: Montserrat;
  width: 44%;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  line-height: 30px;
  color: #071825;

`