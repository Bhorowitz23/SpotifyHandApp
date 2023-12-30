import React from 'react'
import Icon1 from '../../images/1finger.png'
import Icon2 from '../../images/2finger.png'
import Icon3 from '../../images/3finger.png'
import Icon4 from '../../images/4finger.png'
import Icon5 from '../../images/5finger.png'

import { InstructionsContainer, InstructionsH1, InstructionsWrapper, InstructionsCard, HandIcon, InstructionsH2, InstructionsH3, InstructionsH4, Hotkeys } from './InstructionsElements'


export const Instructions = () => {
  return (
    <InstructionsContainer id="instructions">
        <InstructionsH1>Instructions*</InstructionsH1>
        <InstructionsWrapper>
            <InstructionsCard>
                <HandIcon src={Icon1}/>
                <InstructionsH2>Play/Pause</InstructionsH2>
                <Hotkeys>Ctrl + Alt + Up</Hotkeys>
            </InstructionsCard>
            <InstructionsCard>
                <HandIcon src={Icon2}/>
                <InstructionsH2>Next Song</InstructionsH2>
                <Hotkeys>Ctrl + Alt + Right</Hotkeys>
            </InstructionsCard>
            <InstructionsCard>
                <HandIcon src={Icon3}/>
                <InstructionsH2>Last Song</InstructionsH2>
                <Hotkeys>Ctrl + Alt + Left</Hotkeys>
            </InstructionsCard>
            <InstructionsCard>
                <HandIcon src={Icon4}/>
                <InstructionsH2>Mute/Unmute</InstructionsH2>
                <Hotkeys>Ctrl + Alt + M</Hotkeys>
            </InstructionsCard>
            <InstructionsCard>
                <HandIcon src={Icon5}/>
                <InstructionsH2>Open/Minimize Spotify</InstructionsH2>
                <Hotkeys>Ctrl + Alt + S</Hotkeys>
            </InstructionsCard>
        </InstructionsWrapper>
        <InstructionsH4>Once Downloaded, Unzip Folder. Leave Executable File Within Folder.</InstructionsH4>
        <InstructionsH3>*For Best Results Have Your Palm Face the Camera. Toastify's HotKey Settings are in Blue.</InstructionsH3>
    </InstructionsContainer>
  )
}
