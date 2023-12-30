import styled from 'styled-components'

export const AboutContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    position: relative;

    @media screen and (max-width: 768px){
        height: 1100px;
        padding: 0 25px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;

    @media screen and (max-width: 768px){
        font-size: 2rem;
        // padding: 20px;
        margin-top: 50px;
    }
`

export const AboutP = styled.p`
    color: #fff;
    font-size: 1.25rem;
    margin-bottom: 16px;
    margin-top: 24px;

    @media screen and (max-width: 768px){
        font-size: 1rem;
        // margin-bottom: 8px;
        // margin-top:0px;
    }
`

export const AboutWrapper = styled.div`
    max-width: 100%;
    // margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    // grid-gap: 32px;
    padding: 0 100px;

    @media screen and (max-width: 1000px){
        //grid-template-columns: 1fr 1fr;
        // margin:0;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        // padding: 200px;
        // margin: 100px;
    }
`

export const AboutCard = styled.div`
    display: flex;
    // margin-top: 50px;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    // border: 2px solid black;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px){
        margin-top: -10px;
        margin-bottom: 15px;
    }

    // @media screen and (min-width: 1600px){
    //     margin-top: 200px
    // }
`

export const Video = styled.image`
    @media screen and (max-width: 768px){
        height: 40%;
        width: 40%;
}
`

export const AboutH2 = styled.h2`
    color: #fff;
    font-size: 1.25rem;
    margin-bottom: 24px;
    margin-top: 32px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`

export const AboutP3 = styled.p`
    color: #fff;
    font-size: 1.25rem;
    margin-bottom: 16px;
    margin-top: 24px;

    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`



export const AboutH3 = styled.h3`
    color: #0f81e8;
    font-size: 1.5rem;
    margin-bottom: 24px;
    margin-top: -50px;

    @media screen and (max-width: 768px){
        font-size: 1rem;
        margin-bottom: 20px;
        margin-top: 10px;
    }
`

export const Img = styled.img`
    max-width: 75%;
    
    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        // height: 120px;
        width: 100px;
        max-width: 100%;
    }

`

export const ImgWrapper = styled.div`
    // background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

   

    @media screen and (max-width: 1000px){
        //     grid-template-columns: 1fr 1fr;
            // padding: 0 20px;
        }
    
        @media screen and (max-width: 768px){
            grid-template-columns: 1fr;
            // padding: 0 20px;
        }
`

export const AboutP2 = styled.p`
    font-size: 5rem;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 2rem;
        // margin: -20px;
    }
`



export const Link = styled.div`
    color: #01bf71;

    &:hover {
        cursor: pointer;
        text-decoration: underline; 
    }

    @media screen and (max-width: 768px){
        margin-bottom: 20px;
        font-size: .75rem;
    }
`