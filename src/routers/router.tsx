import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import App from '../App';
import Vista1 from '../components/Vista1';
import Vista2 from '../components/Vista2';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="vista1" element={<Vista1 />} />
          <Route path="vista2" element={<Vista2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routers;
