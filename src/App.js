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
  const isNotFound = location.pathname !== '/' && location.pathname !== '/record' && location.pathname !== '/recruit' && location.pathname !== '/contact';

  return (
    <div>
      {!isNotFound && <Header />}
      <Routes>
        {/* ルートを設定 */}
        <Route exact path="/" element={<Home />} />
        <Route path="/record" element={<Record />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/contact" element={<Contact />} />
        {/* 存在しないルートに対するフォールバック */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainApp;
