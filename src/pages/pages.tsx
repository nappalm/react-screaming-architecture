import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import Games from './games';
import Layout from '../features/layout/layout';

export default function Pages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.home} element={<Games />} />
        </Route>
      </Routes>
    </Router>
  );
}
