import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import themes from '../src/components/common/themes';

import GlobalStyle from './decorators/globalStyle';

const demoThemes = [
  themes.default,
  themes.lilacRoseDark,
  themes.water,
  themes.coldGray,
  themes.violetDark,
  themes.flat
];

addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: false,
    maxPropsIntoLine: 1,
    styles: stylesheet => ({
      // Setting the style with a function
      ...stylesheet,
      table: {
        background: 'red'
      }
    })
  })
);
addDecorator(GlobalStyle);
addDecorator(withThemesProvider(demoThemes));

const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
