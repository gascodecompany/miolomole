import Link from 'next/link';
import LogoMiolo from '../../images/js/Logo-miolo'

export default function Logo() {
  return (
    <Link href={'/'}>
      <a><LogoMiolo /></a>
    </Link>
  )
}