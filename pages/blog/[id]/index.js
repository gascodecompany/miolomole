import mongoose from 'mongoose';
import Post from '../../../models/post';
import { useAppProvider } from '../../../store/appProvider';
import PageJustForAdmin from '../../../components/PageJustForAdmin';
import BlogPost from '../../../components/BlogPost/BlogPost';

export default function BlogPage(props){
  const { isLoggedIn } = useAppProvider();
  return isLoggedIn ? <BlogPost { ...props } /> : <PageJustForAdmin />
}

export async function getStaticPaths(){
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  const posts = await Post.find();
  const paths = posts.map((post) => ({ params: { id: `${post._id}` } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params: { id } }) {
  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL, { useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true });
  if(id) {
    const postObj = await Post.findById(id);
    const postsArray = await Post.find();
    const post = postObj ? JSON.stringify(postObj) : {}
    const posts = postsArray ? JSON.stringify(postsArray) : {}
    return { props: { post, posts }, revalidate: 1  }
  } else {
    return { props: { post: {}, posts: [] }, revalidate: 1  }
  }
}
