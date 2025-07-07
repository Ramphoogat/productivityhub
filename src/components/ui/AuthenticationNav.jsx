import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const AuthenticationNav = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login-screen';
  const isRegisterPage = location.pathname === '/register-screen';

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Logo Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
          <svg
            className="w-8 h-8 text-white"
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
        <h1 className="text-2xl font-semibold text-text-primary font-heading">
          ProductivityHub
        </h1>
        <p className="text-text-secondary mt-2">
          {isLoginPage ? 'Welcome back! Sign in to your account' : 'Create your account to get started'}
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex bg-surface-secondary rounded-lg p-1 mb-6">
        <Link
          to="/login-screen"
          className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            isLoginPage
              ? 'bg-surface text-primary shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Sign In
        </Link>
        <Link
          to="/register-screen"
          className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            isRegisterPage
              ? 'bg-surface text-primary shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          Sign Up
        </Link>
      </div>

      {/* Alternative Action */}
      <div className="text-center mt-6">
        <p className="text-text-secondary text-sm">
          {isLoginPage ? "Don't have an account? " : "Already have an account? "}
          <Link
            to={isLoginPage ? '/register-screen' : '/login-screen'}
            className="text-primary hover:text-primary-700 font-medium transition-colors duration-150"
          >
            {isLoginPage ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthenticationNav;