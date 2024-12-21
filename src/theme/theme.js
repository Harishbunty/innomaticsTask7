import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      marginBottom: '20px',
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export default theme;
