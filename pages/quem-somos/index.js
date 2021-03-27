import mongoose from 'mongoose';
import Text from '../../models/text'

export async function getStaticProps() {
  await mongoose.connect(process.env.MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const textsArray = await Text.find({ page: 'aboutUs' });
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  return { props: { texts }, revalidate: 1 }
}

export { default } from './AboutUs';