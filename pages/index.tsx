import Image from 'next/image';

import { Button } from 'components';

function Home(props: { name: string }) {
  const { name } = props;

  return (
    <>
      <span>{name}</span>
      <Image src="/vercel.svg" alt="" width={50} height={50} />
      <Button text="sdad" />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: data,
  };
}

export default Home;
