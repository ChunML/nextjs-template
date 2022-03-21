import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

interface PageProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  background-color: #e59fc5;
  flex: 1 1 0;
`;

const Page: FC<PageProps> = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </Wrapper>
);

export default Page;
