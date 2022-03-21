import type { AppProps } from 'next/app';
import Page from '../components/Page';
import GlobalStyles from '../components/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
