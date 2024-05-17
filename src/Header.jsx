import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// スタイルを定義
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
});

function Header() {
  return (
    <AppBar position="static" color="primary">
      <StyledToolbar>
        <Typography variant="h6">
          関西学院大学 室内合奏団
        </Typography>
        <Button component={Link} to="/" color="inherit">
          ホーム
        </Button>
        <Button component={Link} to="/record" color="inherit">
          過去の演奏
        </Button>
        <Button component={Link} to="/recruit" color="inherit">
          団員募集
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          お問い合わせ
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
