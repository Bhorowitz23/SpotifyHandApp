import React, {useState} from 'react'
import Video from '../../videos/FullHandRecording.mp4'
import {Button} from '../ButtonElements'
import File from '../../SpotifyHandDetector.zip';
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
          <A href={File} download='SpotifyHandDetector'> <DownloadButton onMouseEnter={onHover} onMouseLeave={onHover} type = 'submit' >Download Now {hover ? <ArrowForward /> : <ArrowRight />}</DownloadButton></A>
            {/* <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true' dark='true'>
              Download {hover ? <ArrowForward /> : <ArrowRight />}
            </Button> */}
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}
