import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    height: 100vh;
    
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` :`'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` :`'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 700;
    color: ${({ lightText }) => (lightText ? '#0f81e8' : '#010606')};

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`
export const HeadingTwo = styled.h1`
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 1.1;
    font-weight: 700;
    color: #fff;

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    
    @media screen and (max-width: 768px){
        transform: scale(.6);
        margin-top: -150px;
    }
`
// export const ButtonLink = styled.button`
// border-radius: 50px;
// background: #01bf71;
// white-space: nowrap;
// color: #010606;
// padding: 12px 30px;
// font-size: 16px;
// outline: none;
// border: none;
// cursor: pointer;
// display: flex;
// justify-content: center;
// align-items: center;
// transition: all 0.2s ease-in-out;

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//     }
// `
export const ButtonTwo = styled.div`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
color: #010606;
padding: 12px 30px;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`
export const ButtonLink = styled.button`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
color: #010606;
padding: 12px 30px;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`
