import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppProvider } from '../../store/appProvider';
import * as S from './HeaderNav.style'

export default function HeaderNav({isOpen, toggle}){
  const { isLoggedIn } = useAppProvider();
  let navMenuItems = [
    { name: 'Home', path: '/' },
    { name: 'Livros', path: '/livros' },
    { name: 'Loja', path: '/loja' },
    { name: 'Blog', path: '/blog' },
    { name: 'Quem somos', path: '/quem-somos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Elenco', path: '/elenco'}
  ];

  if(isLoggedIn) { navMenuItems = navMenuItems.concat({ name: 'Destaques', path: '/destaques'}) };

  return (
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
