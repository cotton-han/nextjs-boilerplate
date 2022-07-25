import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { globalStyles } from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
