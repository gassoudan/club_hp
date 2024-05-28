import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

// スタイルを定義
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  marginLeft: '20px',
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&.MuiListItem-button': {
    color: theme.palette.text.primary,
  },
}));

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 画面サイズがsm以下かどうかを判定

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuList = (
    <List>
      <StyledListItem button component={Link} to="/club_hp" onClick={toggleDrawer(false)}>
        <ListItemText primary="ホーム" />
      </StyledListItem>
      <StyledListItem button component={Link} to="/club_hp/record" onClick={toggleDrawer(false)}>
        <ListItemText primary="過去の演奏" />
      </StyledListItem>
      <StyledListItem button component={Link} to="/club_hp/recruit" onClick={toggleDrawer(false)}>
        <ListItemText primary="団員募集" />
      </StyledListItem>
      <StyledListItem button component={Link} to="/club_hp/contact" onClick={toggleDrawer(false)}>
        <ListItemText primary="お問い合わせ" />
      </StyledListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static" color="primary">
        <StyledToolbar>
          <StyledTypography variant="h6">
            関西学院大学 室内合奏団
          </StyledTypography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {menuList}
              </Drawer>
            </>
          ) : (
            <div>
              <StyledButton component={Link} to="/club_hp" color="inherit">
                ホーム
              </StyledButton>
              <StyledButton component={Link} to="/club_hp/record" color="inherit">
                過去の演奏
              </StyledButton>
              <StyledButton component={Link} to="/club_hp/recruit" color="inherit">
                団員募集
              </StyledButton>
              <StyledButton component={Link} to="/club_hp/contact" color="inherit">
                お問い合わせ
              </StyledButton>
            </div>
          )}
        </StyledToolbar>
      </AppBar>
    </>
  );
}

export default Header;
