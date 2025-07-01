import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Customize from './pages/Customize';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/customize" element={<Customize />} />
          <Route
            path="*"
            element={
              <h1 className="text-center text-2xl mt-10">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}
