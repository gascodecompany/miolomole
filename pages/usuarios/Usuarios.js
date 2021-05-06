import { useAppProvider } from '../../store/appProvider';
import UsersList from '../../components/UsersList/UsersList';
import PageJustForAdmin from '../../components/PageJustForAdmin';

export default function Usuarios(props){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <UsersList {...props} /> : <PageJustForAdmin />
}
