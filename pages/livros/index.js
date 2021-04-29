import mongoose from 'mongoose';
import Text from '../../models/text'
import Book from '../../models/book'

export async function getStaticProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const page = 'books';
  const textsArray = await Text.find({ page });
  const booksArray = await Book.find();
  const books = JSON.stringify(booksArray);
  const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
  return { props: { texts, books, page }, revalidate: 1 }
}

export { default } from './Books';