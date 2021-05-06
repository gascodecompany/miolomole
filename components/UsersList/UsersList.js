import axios from 'axios';
import { useState } from 'react';
import Container from '../Container';
import * as S from './UsersList.styles';
import { useRouter } from 'next/router';

export default function UsersList(props) {
  const users = props ? JSON.parse(props.users) : []
  const [usersList, setUsersList] = useState(users);
  const router = useRouter();

  const handleDeleteUser = async (user) => {
    const { _id, userName } = user;
    const confirm = window.confirm(`Tem certeza que deseja deletar ${userName}?`)
    if(!confirm) { return false };
    setUsersList((oldUsers) => {
      const newUsers = [...oldUsers];
      return newUsers.filter((user) => user._id !== _id);
    })
    await axios.delete(`/api/users`, { data: { _id } })
  }

  return (
    <Container>
      <S.UsersList>
        <S.UsersTitle>Usuários</S.UsersTitle>
        <S.UserHeader>
          <b></b>
          <b>Nome</b>
          <b>Função</b>
          <S.AddUserButton onClick={() => router.push('/usuarios/novo')}><span>+</span></S.AddUserButton>
        </S.UserHeader>
        {usersList.map((user) => (
          <S.UsersListItem key={user._id}>
            <S.UserAvatar img={user.avatar}/>
            <S.UserName>{user.userName}</S.UserName>
            <S.UserOccupation>{user.occupation}</S.UserOccupation>
            <S.ButtonDelete type="delete" onClick={() => handleDeleteUser(user)}/>
            <S.ButtonDelete type="edit" onClick={() => router.push(`/usuarios/${user._id}`)} />
          </S.UsersListItem>
        ))}
      </S.UsersList>
    </Container>
  )
}