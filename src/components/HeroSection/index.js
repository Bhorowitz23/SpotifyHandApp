import React, {useState} from 'react'
import Video from '../../videos/FullHandRecording.mp4'
import {Button} from '../ButtonElements'
//import File from '../../SpotifyHandDetector.zip';
import { 
HeroContainer,
HeroBg, 
VideoBg,
HeroContent,
HeroH1,
HeroP, 
HeroBtnWrapper, 
ArrowForward, 
ArrowRight,
DownloadButton,
A 
} from './HeroElements'

export const HeroSection = () => {
  const[hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Control Spotify With Your Hands</HeroH1>
          <HeroP>
            Use on any Windows Device with the Help of Toastify. Press the Button Below to Download and Start Now!
          </HeroP>
          <HeroBtnWrapper>
          <A><DownloadButton onMouseEnter={onHover} onMouseLeave={onHover} type = 'submit' onClick={() => {
                                window.open("https://www.dropbox.com/scl/fi/5fzkr75zvtvxdjmnugcs8/SpotifyHandDetector.zip?rlkey=jcwpbt7nhk5wp58r2962a6lol&dl=0", "_blank");
                                }} >Download Now {hover ? <ArrowForward /> : <ArrowRight />}</DownloadButton>
                  </A>
          {/* <A ref={File} download='SpotifyHandDetector'> <DownloadButton onMouseEnter={onHover} onMouseLeave={onHover} type = 'submit' >Download Now {hover ? <ArrowForward /> : <ArrowRight />}</DownloadButton></A> */}
            {/* <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true' dark='true'>
              Download {hover ? <ArrowForward /> : <ArrowRight />}
            </Button> */}
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}
