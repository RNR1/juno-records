import Image from 'next/image'
import styled from 'styled-components'
import IconsContainer from 'components/shared/IconsContainer'
import SocialBar from 'components/layout/SocialBar'
import paymentIcons from 'components/layout/footer/paymentIcons'
import NavGroup from 'components/layout/navGroup/NavGroup'
import SecureStatement from 'components/layout/secureStatement/SecureStatement'
import config from 'config'
import { info, departments, myJuno, socialLinks } from 'data/footer.json'

const Footer = () => {
  return (
    <Container>
      <Items>
        <ItemGroup title='Help & Information' items={info} direction='column' />
        <ItemGroup title='Departments' items={departments} direction='column' />
        <ItemGroup title='My Juno' items={myJuno} direction='column' />
        <ItemGroup direction='column'>
          <SecureStatement />
          <IconsContainer icons={paymentIcons} />
          <Statement>DJ Mag Best Of British</Statement>
          <SmallStatement>Best Music Store: 5 time winners</SmallStatement>
          <Image
            layout='fixed'
            width={100}
            height={40}
            src='/afem.png'
            alt='Association for Electronic Music'
          />
          <SmallStatement>© 1996 - 2020 Juno Records</SmallStatement>
          <License>
            All image and audio content is used by permission of the copyright
            holders or their agents, and/or according to fair dealing as per the
            UK Copyright, Designs and Patents Act 1988.
          </License>
        </ItemGroup>
      </Items>
      <SocialBar siteTitle={config.title} socialItems={socialLinks} />
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #2c495b;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px;
`

const ItemGroup = styled(NavGroup)`
  text-decoration: none;
  color: #efefef;
  font-size: 12px;
  min-width: 240px;
  line-height: 1.7;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`

const Statement = styled.h5`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`

const SmallStatement = styled.p`
  color: #fff;
  font-size: 13px;
`

const License = styled.p`
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  max-width: 240px;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.7;
  font-style: italic;
`
