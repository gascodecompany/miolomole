import * as S from './Container.style';

export default function Container({ children, className }){
  return(
    <S.Container  className={`container ${className}`}>{children}</S.Container>
  )
}