import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  icons: FC[];
}

const IconsContainer: FC<Props> = ({ icons = [] }) => {
  return (
    <Container>
      {icons.map((Icon, i) => (
        <Icon key={i.toString()} />
      ))}
    </Container>
  );
};

export default IconsContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 220px;
  height: 30px;
  background-color: #e5ecf1;
  border-radius: 2px;
  margin-bottom: 20px;
`;
