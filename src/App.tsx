import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Settings from './pages/dashboard/Settings';
import UserInfo from './pages/dashboard/UserInfo';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="userinfo" element={<UserInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;