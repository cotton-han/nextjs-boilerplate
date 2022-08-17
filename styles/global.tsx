import { css, Global } from '@emotion/react';

import sanitizeCSS from './sanitize';

export const globalStyles = (
  <Global
    styles={css`
      ${sanitizeCSS}
      html,
      body {
      }
    `}
  />
);
