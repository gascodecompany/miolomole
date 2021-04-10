import EditIcon from '../../images/js/EditIcon';
import * as S from './Button.styles';

export default function EditButton(props){
  return(
    <S.EditButton {...props}>
      <EditIcon />
    </S.EditButton>
  )
}