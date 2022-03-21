import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  height: 96px;
  background-color: beige;
`;

const Header: FC = () => (
  <Wrapper>
    Header
  </Wrapper>
);

export default Header;
