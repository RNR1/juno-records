import Link from 'next/link'
import styled from 'styled-components'
import config from 'config'

const Logo = () => {
  return (
    <CustomLink href='/'>
      <a>
        <LogoImg src='/logo.svg' alt={config.title} />
      </a>
    </CustomLink>
  )
}

export default Logo

const CustomLink = styled(Link)`
  user-select: 'none';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';

  .header-logo {
  }
`

const LogoImg = styled.img`
  color: white;
  display: block;
  height: 44px;
  padding-top: 3px;

  @media (max-width: 1024px) {
    height: 35px;
  }
`
