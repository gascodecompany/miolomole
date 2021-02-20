import { useState } from 'react';
import * as S from './HomeLatestArticles.style'
import Container from '../Container'
import Input from '../../Elements/Input'
import Button from '../../Elements/Button'
import { HomeLatestArticlesFieldsState, HomeLatestArticlesFunction } from './HomeLastestArticles.constants';


export default function HomeLatestArticles(){
  const [ fields, setFields ] = useState(HomeLatestArticlesFieldsState);
  const homeLastestFields = HomeLatestArticlesFunction({ fields, setFields });
  const { email} = homeLastestFields;
 return(
  <S.HomeLatestArticles>
   <Container>
      <S.HomeLatestArticlesCard>
        <h1>Receba nossas novidades</h1>
        <S.LastestRegister>
          <Input {...email} setFields={setFields}/>
          <Button label='Cadastrar'/>
        </S.LastestRegister>
        <S.LastestArticlesImage/>
      </S.HomeLatestArticlesCard>
    </Container>
  </S.HomeLatestArticles>
  )
}