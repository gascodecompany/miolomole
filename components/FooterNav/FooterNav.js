import * as S from './FooterNav.style'

export default function FooterNav(){

  const navMenuItems = [
    {name: 'Home', path: '/'},
    {name: 'Livros', path: '/livros' },
    {name: 'Loja', path: '/loja'},
    {name: 'Blog', path: '/blog'},
    {name: 'Quem somos', path: '/quem-somos'},
    {name: 'Contato', path: '/contato'},
  ]

  return(
    <S.FooterNav>
      {navMenuItems.map((item) => 
        <S.NavItem>
          <li>{item.name}</li>
        </S.NavItem>
      )}
    </S.FooterNav>
  )
}
