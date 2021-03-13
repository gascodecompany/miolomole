import styled from 'styled-components';
import BlogJumbotron from '../../images/jumbotronBlog.jpg'

export const BlogJumbotronContainer = styled.div`
  background-image: url(${BlogJumbotron});
  width: 100vw;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .container{
    align-items: flex-end;
  }
`
export const BlogJumbotronTitle = styled.h1`
  font-family: 'Amatic SC';
  font-weight: bold;
  line-height: 1.5;
  display: flex;
  align-items: flex-end;
  letter-spacing: 2.4px;
  
  color: #000000;
  font-size: 25px;
  width: 100%;
  @media screen{
    @media (min-width: 1024px){
      font-size: 44px;
      width: 450px;
    }
  }
`