import React from 'react'
import { Card, Typography } from '@mui/material'; // Import the 'Card' component from Material-UI

export default function TitleName(props) {

return (
    <Card
        sx={{
            border: '1px solid',
            borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
            padding: 1,
            margin: 2,
            borderRadius: 2,
            backgroundColor: 'background.paper', // テーマの背景色を適用
        }}>
            <Typography variant="h4">
                {props.title}
            </Typography>
        </Card>
)
}
