import StoreJumbotron from "../../components/StoreJumbotron";
import StoreSection from "../../components/StoreSection";

export default function Store(props){

  return(
    <>
      <StoreJumbotron {...props} />
      <StoreSection {...props} />
    </>
  )
}