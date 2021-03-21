import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './HeaderNav.style'

export default function HeaderNav(){
  const router = useRouter();

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
        <S.NavItem key={item.name}>
          <Link href={item.path}>
            <li >{item.name}</li>
          </Link>
        </S.NavItem>
      )}
    </S.HeaderNav>
  )
}
