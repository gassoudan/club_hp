import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#464B3C', // プライマリカラー
    },
    secondary: {
      main: '#B5B282', // セカンダリカラー
    },
    background: {
      default: '#c4c49b', // 全体の背景色
      paper: '#ffffff',  // ボックスの背景色
    },
    text: {
      primary: '#464B3C', // テキストの色
      secondary: '#B5B282', // セカンダリテキストの色
    },
  },
  typography: {
    h6: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#B5B282', // タイトルの色
    },
    body1: {
      fontSize: 16,
      color: '#464B3C', // 本文テキストの色
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
