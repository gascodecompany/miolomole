import { useState } from 'react';
import parser from 'html-react-parser'
import Container from '../Container';
import { useRouter } from 'next/router';
import * as S from './StoreSection.style'
import EditIcon from '../../images/js/EditIcon';
import DeleteIcon from '../../images/js/DeleteIcon';
import axios from 'axios';
import { useAppProvider } from '../../store/appProvider';
import Button from '../../Elements/Button';

export default function StoreSection(props){
  const { partners } = props;
  const { isLoggedIn } = useAppProvider();
  const partnersArray = partners && Object.values(partners)
  const [partnersArrayState, setPartnersArrayState] = useState(partnersArray)
  const router = useRouter();

  const handleDeletePartner = async (item) => {
    const { name } = item;
    setPartnersArrayState((oldPartner) => [...oldPartner].filter((partner) => partner._id !== item._id))
    const confirm = window.confirm(`Tem certeza que deseja deletar ${name}?`)
    if(!confirm) { return false };
    await axios.delete(`/api/parceiros`, { data: { ...item } })
  };

  const handleEditPartner = async (_id) => {
    router.push(`/parceiros/${_id}`)
  };

  return(
    <S.StoreSectionContainer>
      <Container>
        <S.StorePartners>
          { isLoggedIn && <S.AddPartnerButton onClick={() => router.push('/parceiros')}>Cadastrar<span>+</span></S.AddPartnerButton> }
          { partnersArrayState && partnersArrayState.map((item) => (
            <S.PartnerCard key={item._id} isLoggedIn={isLoggedIn}>
              <S.PartnerLogo img={item.logo}/>
              <S.PartnerText>
                { parser(item.description) }
              </S.PartnerText>
              { isLoggedIn && (
                <S.Buttons>
                  <Button type="delete" onClick={() => handleDeletePartner(item)} />
                  <Button type="edit" onClick={() => handleEditPartner(item._id)} />
                </S.Buttons>
              )}
            </S.PartnerCard>
          ))}
        </S.StorePartners>
      </Container>
    </S.StoreSectionContainer>
  )
}