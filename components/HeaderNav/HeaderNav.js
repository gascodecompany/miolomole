import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './HeaderNav.style'

export default function HeaderNav({isOpen, toggle}){
  const navMenuItems = [
    { name: 'Home', path: '/' },
    { name: 'Livros', path: '/livros'  },
    { name: 'Loja', path: '/loja' },
    { name: 'Blog', path: '/blog' },
    { name: 'Quem somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
  ]

  return(
    <S.HeaderNav>
      {navMenuItems.map((item) => 
        <S.NavItem key={item.name} key={item.name} onClick={() => toggle(!isOpen)}>
          <Link href={item.path}>
            {item.name}
          </Link>
        </S.NavItem>
      )}
    </S.HeaderNav>
  )
}
