import mongoose from 'mongoose';
import Book from '../../../models/book';
import urlNameFormatter from '../../../utils/urlNameFormatter';

export async function getStaticPaths(){
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const books = await Book.find();
  const paths = [ ...books.map((book) => ({ params: { name: `${urlNameFormatter(book.name)}` } })), ...books.map((book) => ({ params: { name: `${urlNameFormatter(book.name)}-audiovisual` } })) ]
  return { paths, fallback: true }
}

export async function getStaticProps({ params: { name } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(!!name) {
    const urlName = urlNameFormatter(name)
    const splittedId = urlName?.split('-');
    const hasAudiovisual = splittedId && splittedId[splittedId.length - 1] === 'audiovisual';
    if (hasAudiovisual) { splittedId.pop() };
    const joinedName = splittedId?.join('-');
    const booksObj = await Book.findOne({ name: joinedName });
    const book = booksObj ? JSON.stringify(booksObj) : {}
    return { props: { book }, revalidate: 1  }
  } else {
    return { props: { book: {} }, revalidate: 1  }
  }
}

export { default } from './Book';