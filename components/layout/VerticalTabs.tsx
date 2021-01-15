import styled from 'styled-components'
import verticalTabs from 'data/verticalTabs.json'
import { useRouter } from 'next/dist/client/router'
import VerticalTab from './VerticalTab'

const VerticalTabs = () => {
  const { pathname } = useRouter()
  return (
    <Tabs>
      {verticalTabs.map(tab => (
        <VerticalTab key={tab.label} caret={pathname !== tab.to} {...tab} />
      ))}
    </Tabs>
  )
}

export default VerticalTabs

const Tabs = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    gap: 10px;
    top: 100px;
    left: 0;
    z-index: 10;
  }
`
