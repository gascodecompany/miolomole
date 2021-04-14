import { useState } from 'react';
import parser from 'html-react-parser'
import Container from '../Container';
import { useRouter } from 'next/router';
import * as S from './StoreSection.style'
import EditIcon from '../../images/js/EditIcon';
import DeleteIcon from '../../images/js/DeleteIcon';
import axios from 'axios';

export default function StoreSection(props){
  const { partners: partnerProp, isLoggedIn } = props;
  const partnersArray = Object.values(JSON.parse(partnerProp))
  const [partners, setPartners] = useState(partnersArray)
  const router = useRouter();

  const handleDeletePartner = async (item) => {
    const { name } = item;
    setPartners((oldPartner) => [...oldPartner].filter((partner) => partner._id !== item._id))
    const confirm = window.confirm(`Tem certeza que deseja deletar ${name}?`)
    if(!confirm) { return false };
    await axios.delete(`${process.env.API_URL}parceiros`, { data: { ...item } })
  };

  const handleEditPartner = async (_id) => {
    router.push(`/parceiros/${_id}`)
  };

  return(
    <S.StoreSectionContainer>
      <Container>
        <S.StorePartners>
          { isLoggedIn && <S.AddPartnerButton onClick={() => router.push('/parceiros')}>Cadastrar<span>+</span></S.AddPartnerButton> }
          { partners.map((item) => (
            <S.PartnerCard key={item._id}>
              <S.PartnerLogo img={item.logo}/>
              <S.PartnerText>
                { parser(item.description) }
              </S.PartnerText>
              { isLoggedIn && (
                <S.Buttons>
                  <S.DeleteButton onClick={() => handleDeletePartner(item)}><DeleteIcon/></S.DeleteButton>
                  <S.EditButton onClick={() => handleEditPartner(item._id)}><EditIcon className="edit"/></S.EditButton>
                </S.Buttons>
              )}
            </S.PartnerCard>
          ))}
        </S.StorePartners>
      </Container>
    </S.StoreSectionContainer>
  )
}