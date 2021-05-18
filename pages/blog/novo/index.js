import mongoose from 'mongoose';
import Post from '../../../models/post';

export async function getStaticProps() {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
    const postsArray = await Post.find();
    const posts = postsArray ? JSON.stringify(postsArray) : {}
    if(!!postsArray.length){
      return { props: { posts }, revalidate: 1  }
    } else {
      return { props: { posts: [] }, revalidate: 1  }
    }
}

export { default } from './Post';