import * as S from './Player.styles';
import * as P from 'video-react';
import Container from '../Container';

export default function Player(){

  return(
    <Container>
      <S.RPlayer>
        <P.Player
          fluid={true}
          width='auto'
          height={485}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          poster="../images/favicon.png"
        >
          <P.BigPlayButton position='center' />
          <P.LoadingSpinner />
          <P.ControlBar autoHide={true} >
            <P.PlayToggle order={1}/>
            <P.ForwardControl seconds={10} order={2} disabled/>
            <P.VolumeMenuButton disabled/>
            <P.ProgressControl order={2}/>
            <P.CurrentTimeDisplay order={3.1}/>
            <P.TimeDivider order={3.2}/>
            <P.DurationDisplay order={3.3}/>
            <P.FullscreenToggle order={4}/>
          </P.ControlBar>
        </P.Player>  
      </S.RPlayer>
    </Container>
  )
}