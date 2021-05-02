import styled from 'styled-components';


export const RPlayer = styled.div`
  width: 100%;
  max-width: 800px;

  .video-react {
    color: #fbb040;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2.5;
    font-size: 14px;
    
    .video-react-control{
      color: #ffffff;
      width: 3em;
      transition: color 0.4s ease;

      &:hover{
        color: #fbb040;
      }
    }

    .video-react-time-control{
      padding-left: 0.5em;
      padding-right: 0.5em;
    }
    
    .video-react-time-divider{
      padding-left: 0.5em;
    }
    .video-react-play-progress{
      background-color: #fbb040;
    }
  }


`
