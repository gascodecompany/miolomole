import CancelIcon from '../../images/js/CancelIcon';
import * as S from './Button.styles';

export default function CancelButton(props){
  return(
    <S.CancelButton {...props}>
      <CancelIcon />
    </S.CancelButton>
  )
}