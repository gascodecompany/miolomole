import * as S from './HeaderNav.style'

export default function HeaderNav(){

  const navMenuItems = [
    {name: 'Home', path: '/'},
    {name: 'Livros', path: '/livros' },
    {name: 'Loja', path: '/loja'},
    {name: 'Blog', path: '/blog'},
    {name: 'Quem somos', path: '/quem-somos'},
    {name: 'Contato', path: '/contato'},
  ]

  return(
    <S.HeaderNav>
      {navMenuItems.map((item) => 
        <S.NavItem>
          <li>{item.name}</li>
        </S.NavItem>
      )}
    </S.HeaderNav>
  )
}
