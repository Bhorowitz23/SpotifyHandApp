import styled from 'styled-components'

export const InstructionsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding-top: 50px;
    position: relative;

        @media screen and (max-width: 1000px){
            height: 1100px;
        }

        @media screen and (max-width: 480px){
            height: 1300px;
        }
`

export const InstructionsH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const InstructionsWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: space-between;
    justify-content: center;
    // grid-gap: 32px;
    padding: 0 100px;    

    // @media screen and (max-width: 1000px){
    //     grid-template-columns: 1fr;
    // }

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        // padding: 0 20px;
    }
`

export const InstructionsCard = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    // border: 2px solid black;

    @media screen and (max-width: 1000px){
        margin-top: -10px;
        margin-bottom: 15px;
    }

    @media screen and (min-width: 1600px){
        // margin-top: 200px
    }
`

export const HandIcon = styled.img`
    height: 160px;
    width: 160px;
    

    @media screen and (max-width: 1000px){
        height: 100px;
        width: 100px;
    }

`

export const InstructionsH2 = styled.h2`
    font-size: 1rem;
    margin: 30px;
    margin-top: 50px;
    color: #01bf71;
    text-align: center;
    
    @media screen and (max-width: 1000px){
        margin:10px;
        font-size: 1rem;
    }
`
export const Hotkeys = styled.p`
    font-size: 1rem;
    // margin: 20px;
    // margin-top: 50px;
    color: #0f81e8;
    text-align: center;

    @media screen and (max-width: 1000px){
        margin: 5px;
        font-size: .75rem;
    }
`

export const InstructionsH3 = styled.p`
    position: absolute;
    bottom: 15%;
    font-size: 1rem;
    margin-top: 20px;
    // margin-top: 10px;

    color: #010606;
    text-align: center;

    @media screen and (max-width: 1000px){
        bottom: 1%;
        font-size: .75rem;
    }

`

export const InstructionsH4 = styled.h4`
    position: absolute;
    bottom: 25%;
    font-size: 1.5rem;
    // margin: 20px;
    margin-top: 30px;
    color: #010606;
    text-align: center;

    @media screen and (max-width: 1000px){
        bottom: 5%;
        font-size: 1rem;
    }

`
