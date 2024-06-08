import { Typography } from '@mui/material'
import React from 'react'

export default function Content(props) {
  return (
    <Typography 
        variant="body1" 
        gutterBottom
        sx={{
            paddingLeft: 4,
            paddingRight: 4,
        }}
    >
        {props.content}
    </Typography>
  )
}
