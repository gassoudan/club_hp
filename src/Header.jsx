import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// スタイルを定義
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#464B3C', // ヘッダーの背景色
  borderBottom: '1px solid #B5B282', // 下線の色
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  color: '#B5B282', // タイトルの色
});

const StyledButton = styled(Button)({
  color: '#B5B282', // ナビゲーションリンクの色
  marginLeft: '20px',
});

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTypography variant="h6">
          関西学院大学 室内合奏団
        </StyledTypography>
        <StyledButton component={Link} to="/">
          ホーム
        </StyledButton>
        <StyledButton component={Link} to="/record">
          過去の演奏
        </StyledButton>
        <StyledButton component={Link} to="/recruit">
          団員募集
        </StyledButton>
        <StyledButton component={Link} to="/contact">
          お問い合わせ
        </StyledButton>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
