import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { forwardRef } from 'react'

export const AboutUsSectionOne = styled.div`
  overflow-y: hidden;
  .container{
    padding-top: 100px;
    /* flex-direction: row;
    justify-content: center; */
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 20px;
  }
`;

export const SectionOneImages = styled.div`
  position: relative;
  /* min-width: 503px; */
  min-height: 364px;
  height: 100%;
  width: 100%;
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

export const SectionOneText = styled(forwardRef(({ value, edit, ...props }, ref) => edit ? <TextareaAutosize ref={ref} {...props} value={value} /> : <p {...props}>{value}</p>))`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  line-height: 30px;
  color: #071825;
  width: 100%;
`