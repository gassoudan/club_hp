import React from 'react';
import { Typography, Container } from '@mui/material';
import TitleName from './common/TitleName';
import Content from './common/Content';
import BoxText from './common/BoxText';
import CustomList from './common/CustomList';

function Home() {
  const items = [
    { primary: '4月', secondary: '新入生歓迎会', link: "#" },
    { primary: '5月', secondary: 'チャペル演奏', link: "#" },
    { primary: '6月', secondary: '団内発表会', link: "#" },
    { primary: '9月', secondary: '夏合宿', link: "#" },
    { primary: '9月-10月', secondary: '依頼演奏会', link: "#" },
    { primary: '10月', secondary: '新月祭', link: "#" },
    { primary: '12月', secondary: 'クリスマスチャペル', link: "#" },
    { primary: '12月', secondary: '忘年会', link: "#" },
  ];
  return (
    <>
    <Container>
      <Typography variant="h1" gutterBottom>
        ホームページ
      </Typography>
      
      <BoxText title="お知らせ" content="これはお知らせの内容です。" />
      
      <TitleName title="ごあいさつ" />
      <Content content="これはごあいさつの内容です。" />

      <CustomList title="title" items={items} />

      </Container>
    </>
  );
}

export default Home;
