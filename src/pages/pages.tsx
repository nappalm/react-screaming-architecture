import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Home from './home';

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
      </Routes>
    </Router>
  );
}
