
import ConfirmIcon from '../../images/js/ConfirmIcon';
import * as S from './Button.styles';

export default function ConfirmButton(props){
  return(
    <S.ConfirmButton {...props}>
      <ConfirmIcon />
    </S.ConfirmButton>
  )
}