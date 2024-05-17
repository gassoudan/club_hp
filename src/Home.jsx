import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        ホームページ
      </Typography>
      <Box 
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
        }}
      >
        <Typography variant="h6" gutterBottom>
          ようこそ関西学院大学 室内合奏団のホームページへ
        </Typography>
        <Typography variant="body1" gutterBottom>
          これは本文テキストの例です。通常の段落テキストとして表示されます。
        </Typography>
      </Box>
      <Box 
        sx={{
          border: '1px solid #B5B282',
          padding: 2,
          borderRadius: 2,
          backgroundColor: '#e0e0e0',
        }}
      >
        <Typography variant="body2" gutterBottom>
          これは小さいサイズの本文テキストの例です。
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
