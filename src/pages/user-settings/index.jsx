import React from 'react';
import MainAppHeader from '../../components/ui/MainAppHeader';
import ProfileSection from './components/ProfileSection';
import SecuritySection from './components/SecuritySection';
import NotificationSection from './components/NotificationSection';
import DashboardCustomization from './components/DashboardCustomization';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const UserSettings = () => {
  return (
    <div className="min-h-screen bg-background">
      <MainAppHeader />
      
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-text-secondary mb-4">
              <span>Settings</span>
              <Icon name="ChevronRight" size={16} />
              <span className="text-text-primary">Account</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-text-primary font-heading">
                  Account Settings
                </h1>
                <p className="text-text-secondary mt-1">
                  Manage your account preferences and security settings
                </p>
              </div>
              
              <div className="mt-4 sm:mt-0">
                <Button variant="outline" iconName="Download" size="sm">
                  Export Data
                </Button>
              </div>
            </div>
          </div>

          {/* Settings Sections */}
          <div className="space-y-6">
            {/* Profile Information */}
            <ProfileSection />

            {/* Security Settings */}
            <SecuritySection />

            {/* Notification Preferences */}
            <NotificationSection />

            {/* Dashboard Customization */}
            <DashboardCustomization />

            {/* Account Actions */}
            <div className="bg-surface rounded-lg border border-border p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="AlertTriangle" size={20} className="text-warning" />
                <h2 className="text-lg font-semibold text-text-primary">Account Actions</h2>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-warning-100 bg-warning-50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-warning-600">Download Your Data</h3>
                    <p className="text-xs text-warning-600 mt-1">
                      Export all your personal data in a portable format
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3 sm:mt-0">
                    Request Export
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border border-error-100 bg-error-50 rounded-lg">
                  <div>
                    <h3 className="text-sm font-medium text-error-600">Delete Account</h3>
                    <p className="text-xs text-error-600 mt-1">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="danger" size="sm" className="mt-3 sm:mt-0">
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Global Save Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-end">
            <Button variant="outline">
              Reset to Defaults
            </Button>
            <Button variant="primary" iconName="Save">
              Save All Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;