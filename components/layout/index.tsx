import Head from 'next/head';
import { PropsWithChildren } from 'react';

import * as S from './style';

interface LayoutProps {
  title: string;
}

function Layout({ children, title }: PropsWithChildren<LayoutProps>) {
  return (
    <S.Container>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`TileLog ${title} Page`} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <S.Header>{/* Header 컴포넌트 추가 */}</S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>{/* Footer 컴포넌트 추가 */}</S.Footer>
    </S.Container>
  );
}

export default Layout;
