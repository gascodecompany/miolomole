import { useState } from 'react';
import * as S from './Header.style'
import LogoMiolo from '../../images/js/Logo-miolo'
import SearchIcon from '../../images/js/search-icon'
import HeaderNav from '../HeaderNav'
import Hamburger from '../Hamburger'


export default function Header(){
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return(
    <S.Header>
      <LogoMiolo/>
      <S.HeaderContainer>
        <Hamburger isOpen={menuIsOpen} toggle={setMenuIsOpen} />
        <S.HeaderMenu isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
          <S.HeaderMenuContainer isOpen={menuIsOpen} onClick={(e) => e.stopPropagation()}>
            <Hamburger isOpen={menuIsOpen} toggle={setMenuIsOpen} />
            <LogoMiolo/>
            <HeaderNav isOpen={menuIsOpen} toggle={setMenuIsOpen} />
          </S.HeaderMenuContainer>
        </S.HeaderMenu>
        <SearchIcon/>
      </S.HeaderContainer>
    </S.Header>
  )
}
