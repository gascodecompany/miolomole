import { useRouter } from 'next/router'
import InputFile from '../../Elements/Input/InputFile';
import pt from "../../i18n/pt";
import * as S from './PostJumbotron.style'

export default function PostJumbotron(props){
  const image = props?.image ? props?.image : {};
  console.log(props)
  return <InputFile field={image} setFields={props?.setFields} />
}