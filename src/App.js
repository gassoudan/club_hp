import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './Header';

import Home from './Home';
import Record from './Record';
import Contact from './Contact';
import Recruit from './Recruit';
import NotFound from './NotFound';

function MainApp() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <AppWithHeader />
    </Router>
    </ThemeProvider>
  );
}

function AppWithHeader() {
  const location = useLocation();
  const isNotFound = location.pathname !== '/club_hp' && location.pathname !== '/club_hp/record' && location.pathname !== '/club_hp/recruit' && location.pathname !== '/club_hp/contact';

  return (
    <div>
      {!isNotFound && <Header />}
      <Routes>
        {/* ルートを設定 */}
        <Route exact path="/club_hp/" element={<Home />} />
        <Route path="/club_hp/record" element={<Record />} />
        <Route path="/club_hp/recruit" element={<Recruit />} />
        <Route path="/club_hp/contact" element={<Contact />} />
        {/* 存在しないルートに対するフォールバック */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainApp;
