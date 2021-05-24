import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { createContext } from 'react';

const ThemeContext = createContext(true);


//Theme set-up
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    nuetral: Palette['primary'];
  }
  interface PaletteOptions {
    nuetral: PaletteOptions['primary'];
  }
}


const dark = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Roboto Mono"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
    palette: {
      type: 'dark',
      primary: {
        main: '#FFFFFF', // White
      },
      secondary: {
        main: '#D3E1FE', // Blue 200 
      },
      error: {
        main: red.A400,
      },
      nuetral: {
        main: '#E5E7E5', //Nuetral 200
      },
      background: {
        default: '#0C2074', //800
        paper: '#070F45', //900
      },
    
    },
  });

const light = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Roboto Mono"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
    palette: {
        type: 'light',
        primary: {
          main: '#0C2074', //Blue 800
        },
        secondary: {
          main: '#193AA4', //Blue 700
        },
        error: {
          main: red.A400,
        },
        nuetral: {
          main: '#1D1E1F', //Nuetral 900
        },
        background: {
          default: '#FFF',
          paper: '#F5F5F5', //Off-white
        },
    },
});

export const darkTheme = { ...dark }
export const lightTheme = { ...light }

export default ThemeContext;
