import Highlight from '../../../components/Highlight';
import { useAppProvider } from '../../../store/appProvider';

export default function NewHighlight(){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <Highlight /> : <PageJustForAdmin />
}