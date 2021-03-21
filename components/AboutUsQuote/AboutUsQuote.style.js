import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { forwardRef } from 'react'

export const AboutUsQuote = styled.div`
  .container{
    align-items: unset;
  }
`;

export const QuoteWrapper = styled.div`
  width: 65%;
  text-align: justify;
`
export const QuoteText = styled.p`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSMM }}}) => fontSizeSMM };
  line-height: 28px;
  color: #00A79D;
  margin-bottom: 10px;
  width: 100%;
`
export const Credit = styled.p`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeXS }}}) => fontSizeXS };
  line-height: 20px;
  color: #071825;
  text-align: end;
  width: 100%;
`