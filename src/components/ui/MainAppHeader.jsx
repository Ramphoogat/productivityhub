import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import UserAccountDropdown from './UserAccountDropdown';

const MainAppHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null
  });
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-surface border-b border-border z-100">
      <div className="flex items-center justify-between h-15 px-4 lg:px-6">
        {/* Logo and Brand */}
        <Link
          to="/main-dashboard"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-150"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <span className="hidden sm:block text-lg font-semibold text-text-primary font-heading">
            ProductivityHub
          </span>
        </Link>

        {/* User Account Section */}
        <div className="flex items-center space-x-4">
          {/* User Info - Hidden on mobile */}
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-text-primary">{user.name}</p>
            <p className="text-xs text-text-secondary">{user.email}</p>
          </div>

          {/* User Avatar and Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className="flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-full hover:bg-primary-200 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="User account menu"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <span className="text-sm font-medium">
                  {getInitials(user.name)}
                </span>
              )}
            </button>

            {/* Dropdown Menu */}
            <UserAccountDropdown
              isOpen={isDropdownOpen}
              onClose={handleDropdownClose}
              user={user}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainAppHeader;