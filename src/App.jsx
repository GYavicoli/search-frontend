import { Provider as BusProvider } from 'react-bus';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MainMenu } from './menu/MainMenu';
import { SectionContainer } from './sections/SectionContainer';
import './App.css';
import { grey, indigo } from '@mui/material/colors';
import { AppStyle, BkgColor } from './sections/section-styles';
import { Favorites } from './favorites/Favorites';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: grey
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: BkgColor,
          padding: 20, width: '400px'
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BusProvider>
        <Box sx={AppStyle}>
          <MainMenu />
          <SectionContainer />
          <Favorites />
        </Box>
      </BusProvider>
    </ThemeProvider>
  );
}

export default App
