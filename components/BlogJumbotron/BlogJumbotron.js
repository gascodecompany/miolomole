import Container from '../Container'
import * as S from './BlogJumbotron.style'
import Input from '../../Elements/Input';
import InputFile from '../../Elements/Input/InputFile'
import { blogJumbotronFieldsState, blogJumbotronFieldsFunction, gridTemplate } from './BlogJumbotron.constants.js';

export default function BlogJumbotron(props){
  const [fields, setFields] = useState(blogJumbotronFieldsState);
  const blogJumbotronFields = blogJumbotronFieldsFunction({ fields, setFields });

  const formProps = {
    fields: blogJumbotronFields,
    setFields,
    gridTemplate
  }

  return(
    <S.BlogJumbotronContainer>
      <InputFile {...formProps.fields.jumbotron} />
      <Container>
        <Input {...props.fields.title} />
      </Container>
    </S.BlogJumbotronContainer>
  )
}