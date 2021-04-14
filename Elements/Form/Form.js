import { StyledForm } from './Form.style';
import Field from '../Field';

export default function Form(props) {
  const { fields, setFields, gridTemplate } = props;

  return (
    <StyledForm gridTemplate={gridTemplate} joinUsWay={fields.typeForm?.value?.value}>
      { Object.values(fields).map((field) => <Field key={field.name} {...field} setFields={setFields} />)}
    </StyledForm>
  )
}
