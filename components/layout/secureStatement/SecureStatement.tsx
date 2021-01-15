import React from 'react'
import styled from 'styled-components'
import SecureIcon from './secureIcon/SecureIcon'

const SecureStatement = () => {
  return (
    <Title>
      <SecureIcon /> 100% Secure Shopping
    </Title>
  )
}

export default SecureStatement

const Title = styled.h5`
  display: flex;
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: start;
`
