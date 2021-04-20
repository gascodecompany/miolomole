import PartnerForm from '../../../components/PartnerForm';
import PageJustForAdmin from '../../../components/PageJustForAdmin';
import Partner from '../../../models/partner';
import { useAppProvider } from '../../../store/appProvider';
import mongoose from 'mongoose';

export default function PartnerPageEdit(props){
  const { partner } = props;
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <PartnerForm {...props} partner={JSON.parse(partner)} /> : <PageJustForAdmin />
}

export async function getStaticPaths(){
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const partners = await Partner.find();
  const paths = partners.map((partner) => ({ params: { id: `${partner._id}` } }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { id } }) {
  const partner = await Partner.findById(id);
  return { props: { partner: JSON.stringify(partner) }, revalidate: 1  }
}