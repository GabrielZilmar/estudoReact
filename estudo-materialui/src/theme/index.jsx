import {createMuiTheme, colors} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#282c34',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: '#282c34',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
    },
  },
});

export default theme;
