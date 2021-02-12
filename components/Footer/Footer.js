import Logo from '../../images/js/Logo-miolo';
import ContactAddress from '../ContactAddress';
import ContactSocial from '../ContactSocial';
import Copyright from '../Copyright';
import * as S from './Footer.style';

export default function Footer(){

  return(
    <>
    <S.Footer>
      <S.FooterNav>
        <S.FooterNavList>
          <S.FooterNavItem name="logo"><Logo/></S.FooterNavItem>
          <ContactAddress/>
          <ContactSocial/>
        </S.FooterNavList>
      </S.FooterNav>
      <Copyright/>
    </S.Footer>
    </>
  )

}