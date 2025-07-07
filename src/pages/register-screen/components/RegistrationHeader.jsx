import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const RegistrationHeader = () => {
  return (
    <div className="text-center mb-8">
      {/* Logo Section */}
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
        <Icon name="BarChart3" size={32} className="text-white" />
      </div>
      
      {/* Brand Name */}
      <h1 className="text-2xl font-semibold text-text-primary font-heading mb-2">
        ProductivityHub
      </h1>
      
      {/* Welcome Message */}
      <p className="text-text-secondary mb-6">
        Create your account to get started with your productivity journey
      </p>
      
      {/* Navigation Tabs */}
      <div className="flex bg-surface-secondary rounded-lg p-1 mb-6">
        <Link
          to="/login-screen"
          className="flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 text-text-secondary hover:text-text-primary"
        >
          Sign In
        </Link>
        <div className="flex-1 text-center py-2 px-4 rounded-md text-sm font-medium bg-surface text-primary shadow-sm">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default RegistrationHeader;