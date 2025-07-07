import React from 'react';
import RegistrationHeader from './components/RegistrationHeader';
import RegistrationForm from './components/RegistrationForm';
import RegistrationFooter from './components/RegistrationFooter';

const RegisterScreen = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Glass Card Container */}
        <div className="glass-card rounded-2xl p-8 shadow-floating">
          {/* Header Section */}
          <RegistrationHeader />
          
          {/* Registration Form */}
          <RegistrationForm />
          
          {/* Footer Section */}
          <RegistrationFooter />
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;