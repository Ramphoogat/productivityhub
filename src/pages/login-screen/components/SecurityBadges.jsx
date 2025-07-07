import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityBadges = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      text: 'SSL Encrypted'
    },
    {
      icon: 'Lock',
      text: 'Data Protected'
    },
    {
      icon: 'Eye',
      text: 'Privacy First'
    }
  ];

  return (
    <div className="mt-8 pt-6 border-t border-border">
      <div className="flex items-center justify-center space-x-6">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Icon 
              name={feature.icon} 
              size={16} 
              className="text-accent" 
            />
            <span className="text-xs text-text-secondary font-medium">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-text-muted mt-3">
        Your data is secure and protected with enterprise-grade encryption
      </p>
    </div>
  );
};

export default SecurityBadges;