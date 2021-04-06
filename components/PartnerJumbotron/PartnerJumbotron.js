import EditableImage from '../EditableImage';
import * as S from './PartnerJumbotron.styles';

export default function PartnerJumbotron(props){
  return(
    <S.PartnerJumbotron>
      <EditableImage {...props} textKey="PartnerJumbotronImage"><S.PartnerJumbotronImage /></EditableImage>
    </S.PartnerJumbotron>
  )
}