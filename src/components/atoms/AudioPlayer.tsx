import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import IconSoundOn from './IconSoundOn'
import IconSoundOff from './IconSoundOff'

const AudioContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 2.65vh 5px;

  svg {
    transition: all 0.3s ease;
    border: 3px solid transparent;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }
`

const Button = styled.button`
  box-sizing: border-box;
  border: none;
  padding: 0;
  background-color: transparent;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;

    svg {
      border: 3px solid ${props => props.theme.focus.main};
      border-radius: 50%;
    }
  }
`

const useAudio = (url: string) => {
  if (typeof Audio !== 'undefined') {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(true)

    const toggle = () => setPlaying(!playing)

    useEffect(() => {
      audio.loop = true
      audio.autoplay = true
    })

    useEffect(() => {
      playing ? audio.play() : audio.pause()
      return () => {
        audio.pause()
      }
    }, [playing])

    return [playing, toggle]
  }
}

const AudioPlayer: React.FC<{ url: string }> = ({ url }) => {
  if (typeof Audio !== 'undefined') {
    const [playing, toggle] = useAudio(url)

    return (
      <AudioContainer>
        {typeof playing !== 'undefined' && (
          <Button onClick={() => toggle()}>
            {playing ? <IconSoundOn /> : <IconSoundOff />}
          </Button>
        )}
      </AudioContainer>
    )
  }
  return null
}

export default AudioPlayer
