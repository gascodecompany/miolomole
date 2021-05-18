import mongoose from 'mongoose';
import HighlightModel from '../../../models/highlight';
import Highlight from '../../../components/Highlight';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin';

export default function HighlightPage(props){
  const { highlight: userProp } = props;
  const { isLoggedIn } = useAppProvider();
  const highlight = userProp ? JSON.parse(userProp) : {}
  return isLoggedIn ? <Highlight { ...props } highlight={highlight} /> : <PageJustForAdmin />
}

export async function getStaticPaths(){
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const highlights = await HighlightModel.find();
  const paths = highlights.map((highlight) => ({ params: { id: `${highlight._id}` } }));
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { id } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(id) {
    let highlightObj = await HighlightModel.findById(id);
    const highlight = highlightObj ? JSON.stringify(highlightObj) : {}
    return { props: { highlight }, revalidate: 1  }
  } else {
    return { props: { highlight: {} }, revalidate: 1  }
  }
}
