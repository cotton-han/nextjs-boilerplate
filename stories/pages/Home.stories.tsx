import Home, { getServerSideProps } from 'pages';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage: ComponentStory<typeof Home> = (args, { loaded: { name } }) => <Home {...args} name={name} />;
HomePage.args = { name: 'Cotton' };
HomePage.loaders = [
  async () => {
    const res = await getServerSideProps();
    return res.props;
  },
];
