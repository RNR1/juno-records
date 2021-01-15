import React from 'react'
import styled from 'styled-components'

const SecureIcon = () => {
  return (
    <Icon viewBox='0 0 32 32'>
      <line x1='7' y1='13.6' x2='18' y2='13.6' fill='none' />
      <path
        d='M7 7c0-1.2 1-2.4 2.4-2.4h6.3c1.2 0 2.4 1 2.4 2.4v6.9h4.5V7c0-3.8-3.1-7-6.9-7H9.3C5.4 0 2.4 3.2 2.4 7v6.9H7V7z'
        fill='#9C9CA1'
      />
      <path
        d='M2.4 13.6H1.7c-0.9 0-1.7 0.8-1.7 1.8v14.9C0 31.2 0.8 32 1.7 32h21.5c0.9 0 1.7-0.8 1.7-1.7V15.4c0-0.9-0.8-1.7-1.7-1.7h-0.6H18 7 2.4V13.6z'
        fill='#EDBA4D'
      />
      <path
        d='M27 12.8L16.7 23.1 12 18.3l-3.4 3.4 8.1 8.1 13.8-13.6L27 12.8z'
        fill='#5B9325'
      />
      <path
        d='M16.7 31.2l-9.5-9.5L12 17l4.7 4.7L27 11.4l4.9 4.9L16.7 31.2zM10 21.7l6.8 6.8 12.4-12.2L27 14.1 16.7 24.4 12 19.7 10 21.7z'
        fill='#FFF'
      />
    </Icon>
  )
}

export default SecureIcon

const Icon = styled.svg`
  height: 18px;
  margin-right: 4px;
`
