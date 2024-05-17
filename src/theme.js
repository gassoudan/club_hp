import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#464B3C', // プライマリカラー
    },
    secondary: {
      main: '#B5B282', // セカンダリカラー
    },
  },
  typography: {
    h6: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#B5B282', // タイトルの色
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginLeft: '20px',
          color: '#B5B282', // ボタンの色
        },
      },
    },
  },
});

export default theme;
