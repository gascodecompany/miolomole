import LoginModal from "../../components/LoginModal";
import { appWrapper } from "../appProvider";

export default function Admin(){
  const { userProps } = appWrapper();

  return <LoginModal {...userProps} />
}