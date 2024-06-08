import React from 'react';
import { Typography, Container } from '@mui/material';
import TitleName from './common/TitleName';
import Content from './common/Content';
import BoxText from './common/BoxText';

function Home() {
  return (
    <>
    <Container>
      <Typography variant="h1" gutterBottom>
        ホームページ
      </Typography>
      
      <BoxText title="お知らせ" content="これはお知らせの内容です。" />
      
      <TitleName title="ごあいさつ" />
      <Content content="これはごあいさつの内容です。" />

      </Container>
    </>
  );
}

export default Home;
