// import PartnerJumbotron from '../../../components/PartnerJumbotron';
import PartnerForm from '../../../components/PartnerForm';
import axios from 'axios';
import PageJustForAdmin from '../../../components/PageJustForAdmin';

export default function PartnerPageEdit(props){
  // const { partner } = props;
  
  // if(props.isLoggedIn){
  //   return (
  //     <>
  //       {/* <AddPartnerJumbotron {...props} /> */}
  //       <PartnerForm {...props} partner={partner} />
  //     </>
  //   )
  // } else { return <PageJustForAdmin /> }
  return <></>
}

// export async function getStaticPaths(){
  // const res = await axios.get(`${process.env.API_URL}parceiros`)
  // const partners = res.data;
  // const paths = partners.map((partner) => ({
  //   params: { id: partner._id }
  // }))
  // return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
  // const { id } = params;
  // const res = await axios.get(`${process.env.API_URL}parceiros`, { data: { _id: id } })
  // const partner = res.data;
  // return { props: { partner }, revalidate: 1  }
// }