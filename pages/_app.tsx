import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import 'normalize.css';

import { globalStyles } from 'styles/global';
import theme from 'styles/theme';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
