import styled from 'styled-components';

export const ContactSection = styled.div`
  display: flex;
  .container{
    flex-direction: row;
  }
`;
export const ContactInfoWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  margin-right: 50px;
`
export const TitleContact = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 36px;
  color: #212121;
  margin-bottom: 20px;
`

export const TextContact = styled.div`
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 2;
  color: #212121;
  margin-bottom: 20px;
`

export const TagContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

`
export const Logo = styled.div`
  width: 91px;
  height: 91px;
  background-image: url(${({ img }) => img });
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
`
export const ContactAdressWrapper = styled.div`

`
export const ContactTitle = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 2.4px;
  color: #BBBBBB;
  margin-bottom: 10px;
`
export const ContactAdress = styled.div`
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 1.6;
  color: #212121;

`
export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
`