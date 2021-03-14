import styled from 'styled-components';

export const HomeBanners = styled.div`
  
`;

export const Banner = styled.div`
  background-image: url(${({ img }) => img });
  width: 100%;
  height: 300px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

`