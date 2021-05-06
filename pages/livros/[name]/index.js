import mongoose from 'mongoose';
import Book from '../../../models/book';
import Text from '../../../models/text';

export async function getStaticPaths(){
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const books = await Book.find();
  const paths = [ ...books.map((book) => ({ params: { name: `${book.name}` } })), ...books.map((book) => ({ params: { name: `${book.name}-audiovisual` } })) ]
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { name } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(!!name) {
    const splittedId = name?.split('-');
    const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
    if (hasAudiovisual) { splittedId.pop() };
    const joinedName = splittedId?.join('-');
    const booksObj = await Book.findOne({ name: joinedName });
    const booksArray = await Book.find();
    const book = booksObj ? JSON.stringify(booksObj) : {}
    const books = booksArray ? JSON.stringify(booksArray) : [];
    const page = 'books';
    const textsArray = await Text.find({ page });
    const texts = textsArray.reduce((object, text) => Object.assign(object, {[text.textKey]: text.text}), {});
    return { props: { book, books, texts }, revalidate: 1  }
  } else {
    return { props: { book: {}, books: {}, texts: [] }, revalidate: 1  }
  }
}

export { default } from './Book';