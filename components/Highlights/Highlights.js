import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../Elements/Button';
import Container from '../Container';
import * as S from './Highlights.styles';

export default function Highlights(props){
  const router = useRouter();
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    if(props.highlights){ setHighlights(JSON.parse(props.highlights))}
  }, [props.highlights])

  const handleDelete = async (id) => {
    setHighlights((oldFields) => {
      const newFields = {...oldFields};
      console.log(newFields)
      // return newFields.filter((field) => field._id !== id)
    })
    await axios.delete('/api/destaques', { data: { id } })
  }

  return(
    <S.Highlights>
      <S.Header>
       <S.Title>Destaques</S.Title>
       <S.AddUserButton onClick={() => router.push('/destaques/novo')}><span>+</span></S.AddUserButton>
      </S.Header>
      <S.List>
        {!!highlights?.length && highlights.map((highlight) => (
          <S.Jumbotron img={highlight?.image} key={highlight?.image + "Jumbotron"} onClick={() => router.push(`/destaques/${highlight._id}`)} >
            <Button className="delete" type="delete" onClick={() => handleDelete(highlight._id)}/>
            <Container>
              <S.Description>{highlight?.description}</S.Description>
              <S.JumboTitle>{highlight?.title}</S.JumboTitle>
            </Container>
          </S.Jumbotron>
        ))}
      </S.List>
    </S.Highlights>
  )
}