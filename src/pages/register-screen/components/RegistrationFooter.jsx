import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationFooter = () => {
  return (
    <div className="mt-8 space-y-4">
      {/* Alternative Action */}
      <div className="text-center">
        <p className="text-text-secondary text-sm">
          Already have an account?{' '}
          <Link
            to="/login-screen"
            className="text-primary hover:text-primary-700 font-medium transition-colors duration-150"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Security Notice */}
      <div className="text-center">
        <p className="text-xs text-text-muted">
          By creating an account, you agree to our secure data handling practices.
          <br />
          Your information is protected with industry-standard encryption.
        </p>
      </div>

      {/* Copyright */}
      <div className="text-center pt-4 border-t border-border">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} ProductivityHub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default RegistrationFooter;