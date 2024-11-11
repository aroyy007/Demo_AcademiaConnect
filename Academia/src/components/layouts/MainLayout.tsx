import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap, Home, Search, Users, Bell, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/feed" className="flex items-center">
                <GraduationCap className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">EDU Social</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <NavLink to="/feed" icon={<Home />} active={isActive('/feed')} />
              <NavLink to="/explore" icon={<Search />} active={isActive('/explore')} />
              <NavLink to="/friends" icon={<Users />} active={isActive('/friends')} />
              <NavLink to="/notifications" icon={<Bell />} active={isActive('/notifications')} />
              
              <div className="relative ml-3 group">
                <button className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}`}
                    alt={user?.name}
                  />
                </button>
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                  {user?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

const NavLink: React.FC<{
  to: string;
  icon: React.ReactNode;
  active: boolean;
}> = ({ to, icon, active }) => (
  <Link
    to={to}
    className={`p-2 rounded-lg hover:bg-gray-100 ${
      active ? 'text-primary-600' : 'text-gray-500'
    }`}
  >
    {React.cloneElement(icon as React.ReactElement, {
      className: 'h-6 w-6',
    })}
  </Link>
);