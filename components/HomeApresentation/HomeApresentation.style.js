import styled from 'styled-components';
import homeApresentationImg from '../../images/homeApresentationImg.jpg'
import TextareaAutosize from 'react-textarea-autosize';

export const HomeApresentation = styled.div`
  
  .container{
    flex-direction: row;
  }
`

export const HomeApresentationImage = styled.div`
  background-image: url(${homeApresentationImg});
  width: 420px;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const HomeInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
`
export const HomeApresentationTitle = styled(({ value, edit, ...props }) => edit ? <TextareaAutosize {...props} value={value} /> : <h2 {...props}>{value}</h2>)`
  font-family: Amatic SC;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  width: 100%;
  margin-bottom: 30px;
  color: #000000;
  border: none;
  margin: 0;
  padding: 0;
  background-color: ${({edit}) => edit ? '#dcccaa33' : 'transparent'};
  white-space: break-spaces;
  resize: none;
`
export const HomeApresentationText = styled(({ value, edit, ...props }) => edit ? <TextareaAutosize {...props} value={value} /> : <p {...props}>{value}</p>)`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ theme: { fontSize: { fontSizeSM }}}) => fontSizeSM };
  background-color: ${({edit}) => edit ? '#dcccaa33' : 'transparent'};
  line-height: 28px;
  color: #000000;
  width: 100%;
  white-space: break-spaces;
  border: none;
  margin: 0;
  padding: 0;
  resize: none;
`