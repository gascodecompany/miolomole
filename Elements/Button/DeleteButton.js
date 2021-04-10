import DeleteIcon from '../../images/js/DeleteIcon';
import * as S from './Button.styles';

export default function DeleteButton(props){
  return(
    <S.DeleteButton {...props}>
      <DeleteIcon />
    </S.DeleteButton>
  )
}