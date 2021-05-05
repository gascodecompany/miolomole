import * as S from './UsersList.styles';
import Container from '../Container';
import { useState } from 'react';

const UserExamples = [
  {
    avatar: "http://placekitten.com/g/200/300",
    userName: "Luana Vignon",
    occupation: "Editor",
  },
  {
    avatar: "http://placekitten.com/g/200/300",
    userName: "Suínera",
    occupation: "Editor",
  },
  {
    avatar: "http://placekitten.com/g/200/300",
    userName: "Fulano de tal",
    occupation: "Editor",
  }
]

export default function UsersList(props) {
  const users = props ? JSON.parse(props.users) : []
  const [usersList, setUsersList] = useState(users);

  return(
    <Container>
      <S.UsersList>
        <S.UsersTitle>Usuários</S.UsersTitle>
        <S.UserHeader>
          <b></b>
          <b>Nome</b>
          <b>Função</b>
        </S.UserHeader>
        {usersList.map((user) => (
        <S.UsersListItem>
          <S.UserAvatar img={user.avatar}/>
          <S.UserName>{user.userName}</S.UserName> 
          <S.UserOccupation>{user.occupation}</S.UserOccupation> 
          <S.ButtonDelete type="delete"/>
          <S.ButtonDelete type="edit"/>
        </S.UsersListItem>
        ))}
      </S.UsersList>
    </Container>
  )
}