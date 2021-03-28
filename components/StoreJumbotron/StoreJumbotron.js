
import { useState } from 'react';
import * as S from './StoreJumbotron.style'
import Container from '../Container'
import { StoreJumbotronFieldsFunction, StoreJumbotronFieldsState, gridTemplate } from './StoreJumbotron.constants';
import Form from '../../Elements/Form';
import Editable from '../Editable';

export default function StoreJumbotron(props){
const [ fields, setFields ] = useState(StoreJumbotronFieldsState);
const storeJumbotronFields = StoreJumbotronFieldsFunction({ fields, setFields });
const storeJumbotronObj = { fields: storeJumbotronFields, setFields, gridTemplate}

 // <Editable {...props} textKey="aboutUsImaginationTitle"><S.ImagitationTitle /></Editable>
 
 return(
    <S.StoreJumbotronContainer>
      <Container>
        <S.JumbotronWraper>
        <Editable {...props} textKey="storeJumbotronTitle"><S.StoreJumbotronTitle /></Editable>
          <S.StoreJumbotronSubTitle>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum orem ipsum orem ipsum orem ipsum </S.StoreJumbotronSubTitle>
          <Form {...storeJumbotronObj}/>
        </S.JumbotronWraper>
      </Container>
    </S.StoreJumbotronContainer>
  )
}