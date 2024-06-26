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
import paths from './utils/paths';

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
  const isNotFound = !paths.includes(location.pathname);

  return (
    <div>
      {!isNotFound && <Header />}
      <Routes>
        {/* ルートを設定 */}
        <Route exact path={paths[1]} element={<Home />} />
        <Route path={paths[2]} element={<Record />} />
        <Route path={paths[3]} element={<Recruit />} />
        <Route path={paths[4]} element={<Contact />} />
        {/* 存在しないルートに対するフォールバック */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainApp;
