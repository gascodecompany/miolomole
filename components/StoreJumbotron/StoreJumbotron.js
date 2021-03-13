
import { useState } from 'react';
import * as S from './StoreJumbotron.style'
import Container from '../Container'
import { StoreJumbotronFieldsFunction, StoreJumbotronFieldsState, gridTemplate } from './StoreJumbotron.constants';
import Form from '../../Elements/Form';

export default function StoreJumbotron(){
const [ fields, setFields ] = useState(StoreJumbotronFieldsState);
const storeJumbotronFields = StoreJumbotronFieldsFunction({ fields, setFields });
const storeJumbotronObj = { fields: storeJumbotronFields, setFields, gridTemplate}

 return(
    <S.StoreJumbotronContainer>
      <Container>
        <S.JumbotronWraper>
          <S.StoreJumbotronTitle>Parceiros</S.StoreJumbotronTitle>
          <S.StoreJumbotronSubTitle>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum </S.StoreJumbotronSubTitle>
          <Form {...storeJumbotronObj}/>
        </S.JumbotronWraper>
      </Container>
    </S.StoreJumbotronContainer>
  )
}