import React from 'react'
import { Container, Box, Typography } from '@mui/material'

export default function Recruit() {
  const QA_style = {
    padding: 2,
    marginBottom: 2,
  };

  const QA_index = {
    fontWeight: 'bold',
    marginBottom: 1,
  };

  return (
    <Container>
      <Typography variant='h1' gutterBottom>
        団員募集
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
          ようこそ室内合奏団へ！
        </Typography>
        <Typography variant="body1" gutterBottom>
          音楽や楽器が好きな方大学で音楽をやってみようと思っている方アンサンブルやオーケストラに興味がある方私たちと一緒に新しいことを始めてみませんか？
        </Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
        }}>

        <Typography variant="h6" gutterBottom>
          募集パート
        </Typography>
        <Typography variant="body1" gutterBottom>
          弦楽器
          管楽器
          打楽器
        </Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
        }}>

        <Typography variant="h6" gutterBottom>
          活動日・場所
        </Typography>
        <Typography variant="body1" gutterBottom>
          練習時間
        </Typography>
      </Box>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
        }}>

        <Typography variant="h6" gutterBottom>
          Q&A
        </Typography>

        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q どんなサークル？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 神戸三田キャンパスで活動する管弦楽サークルです。
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q いつ練習していますか？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 毎週2回、17:00~20:00に、クラブハウス棟で活動しています！
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 見学に行きたいです！
          </Typography>
          <Typography variant="body1" gutterBottom>
            A いつでもどうぞ！
          </Typography>
        </Box>
        <Box sx={QA_style}>
          <Typography variant="body1" sx={QA_index}>
            Q 初心者です！大丈夫でしょうか？
          </Typography>
          <Typography variant="body1" gutterBottom>
            A 大歓迎です！優しい先輩が丁寧に教えます！
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
