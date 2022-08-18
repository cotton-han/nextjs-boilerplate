import { ThemeProvider } from '@emotion/react';
import { rest, setupWorker } from 'msw';
import * as NextImage from 'next/image';
import { RecoilRoot } from 'recoil';

import { globalStyles } from '../styles/global';
import theme from '../styles/theme';

if (typeof global.process === 'undefined') {
  const worker = setupWorker(
    rest.get('http://localhost:3000/api/hello', (req, res, ctx) => {
      return res(ctx.json({ name: 'Cotton' }));
    }),
  );

  worker.start();
}

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <Story />
      </ThemeProvider>
    </RecoilRoot>
  ),
];
