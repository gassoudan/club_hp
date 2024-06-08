import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomList = ({ title, items }) => {
  return (
    <Container maxWidth="sm">
      <Box 
        sx={{
          border: '1px solid',
          borderColor: 'secondary.main', // テーマのセカンダリカラーを適用
          padding: 2,
          marginBottom: 2,
          borderRadius: 2,
          backgroundColor: 'background.paper', // テーマの背景色を適用
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {items.map(item => (
            <React.Fragment key={crypto.randomUUID()}>
              <Grid item xs={3}></Grid>
              <Grid item xs={2.5}>
                <Typography align="left" gutterBottom>{item.primary}</Typography>
              </Grid>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={5}>
                <Link to={item.link} style={{ display: 'block', textAlign: 'left', textDecoration: 'none', color: 'inherit' }}>
                  {item.secondary}
                </Link>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CustomList;
