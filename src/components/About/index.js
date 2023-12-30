import React from 'react'
import Icon1 from '../../images/naruto.jpg'
import Icon2 from '../../images/pony.png'
import Icon3 from '../../images/onepiece.png'
import Image from '../../images/blueSpotify.png'
import HoverVideoPlayer from 'react-hover-video-player';
import HandVideo from '../../videos/HandDetectionRecording.mp4'
import FingerVideo from '../../videos/FingerDetectionRecording.mp4'


import { AboutContainer, AboutH1, AboutWrapper, AboutCard, AboutIcon, AboutH3, AboutP, AboutH2, Img, ImgWrapper, AboutP2, Link, AboutP3, Video } from './AboutElements'

export const About = () => {
  return (
    <AboutContainer id="about">
        <AboutH1>About</AboutH1>
        <AboutP>How It's Made</AboutP>
            <AboutWrapper>
                <AboutCard>
                    <AboutH2>Finger Detection</AboutH2>
                    <Video><HoverVideoPlayer videoSrc={FingerVideo}/></Video>
                    <AboutP3>(Python Code)</AboutP3>
                </AboutCard>
                <AboutP2>+</AboutP2>
                <AboutCard>
                    <AboutH3>Toastify</AboutH3>
                    <ImgWrapper>
                        <Img src={Image} onClick={() => {
                                window.open("https://aleab.github.io/toastify/", "_blank");
                                }}/>
                    </ImgWrapper>
                </AboutCard>
                <AboutP2>+</AboutP2>
                <AboutCard>
                    <AboutH2>Hand Detection</AboutH2>
                    <Video><HoverVideoPlayer videoSrc={HandVideo}/></Video>
                    <AboutP3>(Python Code)</AboutP3>
                </AboutCard>
            </AboutWrapper>
            <AboutP>All Python Code Can Be Found Here:</AboutP>
            <Link
                onClick={() => {
                window.open("https://github.com/BenjaminH23/SpotifyHandDetector/tree/main", "_blank");
                }}
            >https://github.com/BenjaminH23/SpotifyHandDetector/tree/main</Link>

    </AboutContainer>
  )
}
