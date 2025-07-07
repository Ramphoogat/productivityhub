import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const UserAccountDropdown = ({ isOpen, onClose, user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    // Close dropdown
    onClose();
    
    // Navigate to login
    navigate('/login-screen');
  };

  const handleSettingsClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-64 bg-surface rounded-lg shadow-floating border border-border z-200">
      {/* User Info Header */}
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-full">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <span className="text-sm font-medium">
                {user.name
                  .split(' ')
                  .map(word => word.charAt(0))
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-text-primary truncate">
              {user.name}
            </p>
            <p className="text-xs text-text-secondary truncate">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        <Link
          to="/user-settings"
          onClick={handleSettingsClick}
          className="flex items-center px-4 py-2 text-sm text-text-primary hover:bg-surface-secondary transition-colors duration-150"
        >
          <Icon name="Settings" size={16} className="mr-3 text-text-secondary" />
          Account Settings
        </Link>
        
        <Link
          to="/main-dashboard"
          onClick={onClose}
          className="flex items-center px-4 py-2 text-sm text-text-primary hover:bg-surface-secondary transition-colors duration-150"
        >
          <Icon name="LayoutDashboard" size={16} className="mr-3 text-text-secondary" />
          Dashboard
        </Link>

        <div className="border-t border-border my-2"></div>

        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-sm text-error hover:bg-error-50 transition-colors duration-150"
        >
          <Icon name="LogOut" size={16} className="mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserAccountDropdown;