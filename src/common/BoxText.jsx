import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function BoxText(props) {
  return (
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
          {props.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {props.content}
        </Typography>
      </Box>
  )
}
