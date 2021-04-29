import { useState } from 'react';
import * as S from './Header.style'
import Logo from '../Logo'
import SearchIcon from '../../images/js/search-icon'
import HeaderNav from '../HeaderNav'
import Hamburger from '../Hamburger'
import Container from '../Container'
import Input from '../../Elements/Input'

export default function Header(){
  const [search, setSearch] = useState('')
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const inputSearchObj = {
    name: 'search',
    placeholder: 'Procurar',
    value: search,
    onChange: ({ target: { value} }) => setSearch(value),
  }

  return(
    <S.Header>
      <Container>
      <Hamburger isOpen={menuIsOpen} toggle={setMenuIsOpen} />
      <Logo />
      <S.HeaderMenu isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <S.HeaderMenuContainer isOpen={menuIsOpen} onClick={(e) => e.stopPropagation()}>
          <Hamburger isOpen={menuIsOpen} toggle={setMenuIsOpen} />
          <Logo/>
          <HeaderNav isOpen={menuIsOpen} toggle={setMenuIsOpen} />
          <S.SearchField className="searchField">
            <Input { ...inputSearchObj } />
            <SearchIcon />
          </S.SearchField>
        </S.HeaderMenuContainer>
      </S.HeaderMenu>
      <S.SearchField>
          <Input { ...inputSearchObj } />
          <SearchIcon />
        </S.SearchField>
      </Container>
    </S.Header>
  )
}
