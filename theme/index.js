import { theme as defaultTheme, extendTheme } from '@chakra-ui/react';
import Button from './components/Button';
import Text from './components/Text';
import colors from './colors';

import globalStyles from './globalStyles';

const myTheme = {
  styles: globalStyles,
  colors,
  radii: {
    simple: '10px'
  }
};
const theme = extendTheme({
  ...defaultTheme,
  ...myTheme,
  components: {
    Button,
    Text
  }
});

export default theme;
