import { useState } from 'react';
import dynamic from 'next/dynamic';
import * as S from './BlogPost.styles';
import Field from '../../Elements/Field';
import Button from '../../Elements/Button';
import PostJumbotron from '../PostJumbotron';
import LatestArticles from '../LatestArticles';
import { blogPostFieldsState, blogPostFieldsFunction } from './BlogPost.constants.js';

const BlogEditor = dynamic(
  () => import('../BlogEditor'),
  { ssr: false }
)

export default function BlogPost(props){
  const [fields, setFields] = useState(blogPostFieldsState);
  const blogPostFields = blogPostFieldsFunction({ fields });

  const publish = async () => {
    const variables = {
      title: blogPostFields.title.value,
      image: blogPostFields.image.value,
      nodes: blogPostFields.nodes.value
    }
    console.log(variables)
  }
  return(
    <S.BlogPostWrapper>
      <PostJumbotron {...blogPostFields} setFields={setFields} />
      <Field {...blogPostFields.title} setFields={setFields} />
      <BlogEditor {...blogPostFields.nodes} />
      <Button variation="primary" label="Publicar Post" onClick={() => publish()}/>
      <LatestArticles {...props} />
    </S.BlogPostWrapper>
  )
}