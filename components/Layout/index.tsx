import Head from 'next/head';

import * as S from './style';

function Layout(props: { children: React.ReactNode; title: string }) {
  const { children, title } = props;

  return (
    <S.Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Tile Log Description" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <S.Header></S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer></S.Footer>
    </S.Container>
  );
}

export default Layout;
