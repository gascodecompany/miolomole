import { useState } from 'react';
import * as S from './ContactSection.style';
import Container from '../Container'
import Logo from '../../images/js/Logo-miolo'
import { ContactSectionFieldsState, ContactSectionFunction, gridTemplate } from './ContactSection.constants';
import Input from '../../Elements/Input'
import Button from '../../Elements/Button'
import logoContato from '../../images/logo-contato.png'

export default function ContactSection(){
  const [ fields, setFields ] = useState(ContactSectionFieldsState);
  const contactSectionFields = ContactSectionFunction({ fields, setFields });
  const { name, email, message } = contactSectionFields;

 return(
    <S.ContactSection>
      <Container>
        <S.ContactInfoWrapper>
          <S.TitleContact>Contato</S.TitleContact>
          <S.TextContact>Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem orem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem  Lorem Ipsum Lorem.</S.TextContact>
          <S.TagContact>
            <S.Logo img={logoContato}/>
            <S.ContactAdressWrapper>
              <S.ContactTitle>Endereço</S.ContactTitle>
              <S.ContactAdress>Rua Vergueiro, nº 3307. Conjunto 3 - Vila Mariana<br></br>São Paulo - SP - 04101-300</S.ContactAdress>
            </S.ContactAdressWrapper>
          </S.TagContact>
        </S.ContactInfoWrapper>
        <S.ContactForm>
          <Input {...name} setFields={setFields} gridTemplate/>
          <Input {...email} setFields={setFields} gridTemplate/>
          <Input {...message} setFields={setFields} gridTemplate/>
          <Button label='Enviar'/>
        </S.ContactForm>
      </Container>

    </S.ContactSection>
  )
}