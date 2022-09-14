module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@storybook-axios/register',
    /* '@storybook/addon-links', */
    // { ネットでは必須のように書いてあるが書いたら動かない？なぜ？
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //     },
    //   },
    // }
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
