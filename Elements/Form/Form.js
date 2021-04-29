import { StyledForm } from './Form.style';
import Field from '../Field';

export default function Form(props) {
  const { fields, setFields, gridTemplate, isLoggedIn, striped } = props;
  return (
    <StyledForm striped={striped} gridTemplate={gridTemplate}>
      <form>
        { Object.values(fields).map((field) => <Field key={field.name} {...field} isLoggedIn={isLoggedIn} setFields={setFields} />)}
      </form>
    </StyledForm>
  )
}
