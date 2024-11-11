import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { Feed } from './pages/Feed';
import { Profile } from './pages/Profile';
import { AdminDashboard } from './pages/admin/Dashboard';
import { useAuthStore } from './store/authStore';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AdminRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated, user } = useAuthStore();
  return isAuthenticated && user?.role === 'admin' ? (
    element
  ) : (
    <Navigate to="/feed" />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<PrivateRoute element={<Feed />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/admin" element={<AdminRoute element={<AdminDashboard />} />} />
      </Routes>
    </Router>
  );
}

export default App;