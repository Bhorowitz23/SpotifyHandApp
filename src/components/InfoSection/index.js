import React from 'react';
import { Button } from '../ButtonElements';
import {Link} from 'react-router-dom'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, ButtonLink, ButtonTwo, HeadingTwo } from './InfoElements';

export const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <HeadingTwo>Look at Instructions Page to set Toastify's Hotkey Settings.</HeadingTwo>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                               {/* <Button to="home" 
                               smooth={true}
                               duration={500}
                               spy={true}
                               offset={-80}
                               primary={primary ? 1 : 0}
                               dark={dark ? 1 : 0}
                               dark2={dark2 ? 1 : 0} 
                               >{buttonLabel}</Button> */}
                               {/* <a href="https://aleab.github.io/toastify/" target="_blank">
                                <ButtonLink type="button" className="btn btn-info" color='red'>Link to Download Toastify</ButtonLink>
                                </a> */}
                            <ButtonTwo
                                onClick={() => {
                                window.open("https://aleab.github.io/toastify/", "_blank");
                                }}
                            >Link to Download Toastify</ButtonTwo>
                            </BtnWrap>
                            
                            
                        </TextWrapper>
                        
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>  
    </>
  )
}
