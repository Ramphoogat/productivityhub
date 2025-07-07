import React from 'react';
import AuthenticationNav from '../../components/ui/AuthenticationNav';
import LoginForm from './components/LoginForm';
import WelcomeMessage from './components/WelcomeMessage';
import SecurityBadges from './components/SecurityBadges';

const LoginScreen = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Authentication Navigation */}
        <AuthenticationNav />
        
        {/* Main Login Card */}
        <div className="bg-surface rounded-xl shadow-elevated border border-border p-6 sm:p-8">
          {/* Welcome Message */}
          <WelcomeMessage />
          
          {/* Login Form */}
          <LoginForm />
          
          {/* Security Trust Indicators */}
          <SecurityBadges />
        </div>
        
        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} ProductivityHub. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;