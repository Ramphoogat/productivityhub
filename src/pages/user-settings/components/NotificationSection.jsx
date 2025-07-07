import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notifications, setNotifications] = useState({
    email: {
      taskReminders: true,
      financialAlerts: true,
      fitnessGoals: false,
      weeklyReports: true,
      securityAlerts: true
    },
    push: {
      taskDeadlines: true,
      paymentNotifications: true,
      workoutReminders: false,
      dailySummary: true,
      emergencyAlerts: true
    },
    inApp: {
      realTimeUpdates: true,
      achievementBadges: true,
      socialNotifications: false,
      systemMaintenance: true
    }
  });

  const handleNotificationToggle = (category, type) => {
    setNotifications(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [type]: !prev[category][type]
      }
    }));
  };

  const NotificationToggle = ({ enabled, onChange, label, description }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1">
        <p className="text-sm font-medium text-text-primary">{label}</p>
        {description && (
          <p className="text-xs text-text-secondary mt-1">{description}</p>
        )}
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
          enabled ? 'bg-primary' : 'bg-secondary-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Bell" size={20} className="text-primary" />
          <h2 className="text-lg font-semibold text-text-primary">Notification Preferences</h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>

      {isExpanded && (
        <div className="space-y-6">
          {/* Email Notifications */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-md font-medium text-text-primary mb-4 flex items-center">
              <Icon name="Mail" size={16} className="mr-2 text-text-secondary" />
              Email Notifications
            </h3>
            
            <div className="space-y-1">
              <NotificationToggle
                enabled={notifications.email.taskReminders}
                onChange={() => handleNotificationToggle('email', 'taskReminders')}
                label="Task Reminders"
                description="Get notified about upcoming task deadlines"
              />
              <NotificationToggle
                enabled={notifications.email.financialAlerts}
                onChange={() => handleNotificationToggle('email', 'financialAlerts')}
                label="Financial Alerts"
                description="Receive alerts for large transactions and budget limits"
              />
              <NotificationToggle
                enabled={notifications.email.fitnessGoals}
                onChange={() => handleNotificationToggle('email', 'fitnessGoals')}
                label="Fitness Goals"
                description="Weekly progress updates and achievement notifications"
              />
              <NotificationToggle
                enabled={notifications.email.weeklyReports}
                onChange={() => handleNotificationToggle('email', 'weeklyReports')}
                label="Weekly Reports"
                description="Comprehensive weekly productivity summary"
              />
              <NotificationToggle
                enabled={notifications.email.securityAlerts}
                onChange={() => handleNotificationToggle('email', 'securityAlerts')}
                label="Security Alerts"
                description="Important security and login notifications"
              />
            </div>
          </div>

          {/* Push Notifications */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-md font-medium text-text-primary mb-4 flex items-center">
              <Icon name="Smartphone" size={16} className="mr-2 text-text-secondary" />
              Push Notifications
            </h3>
            
            <div className="space-y-1">
              <NotificationToggle
                enabled={notifications.push.taskDeadlines}
                onChange={() => handleNotificationToggle('push', 'taskDeadlines')}
                label="Task Deadlines"
                description="Instant alerts for approaching deadlines"
              />
              <NotificationToggle
                enabled={notifications.push.paymentNotifications}
                onChange={() => handleNotificationToggle('push', 'paymentNotifications')}
                label="Payment Notifications"
                description="Real-time payment and transaction alerts"
              />
              <NotificationToggle
                enabled={notifications.push.workoutReminders}
                onChange={() => handleNotificationToggle('push', 'workoutReminders')}
                label="Workout Reminders"
                description="Daily reminders to stay active and exercise"
              />
              <NotificationToggle
                enabled={notifications.push.dailySummary}
                onChange={() => handleNotificationToggle('push', 'dailySummary')}
                label="Daily Summary"
                description="End-of-day productivity and achievement summary"
              />
              <NotificationToggle
                enabled={notifications.push.emergencyAlerts}
                onChange={() => handleNotificationToggle('push', 'emergencyAlerts')}
                label="Emergency Alerts"
                description="Critical system and security notifications"
              />
            </div>
          </div>

          {/* In-App Notifications */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-md font-medium text-text-primary mb-4 flex items-center">
              <Icon name="Monitor" size={16} className="mr-2 text-text-secondary" />
              In-App Notifications
            </h3>
            
            <div className="space-y-1">
              <NotificationToggle
                enabled={notifications.inApp.realTimeUpdates}
                onChange={() => handleNotificationToggle('inApp', 'realTimeUpdates')}
                label="Real-time Updates"
                description="Live updates for data changes and sync status"
              />
              <NotificationToggle
                enabled={notifications.inApp.achievementBadges}
                onChange={() => handleNotificationToggle('inApp', 'achievementBadges')}
                label="Achievement Badges"
                description="Celebrate milestones and goal completions"
              />
              <NotificationToggle
                enabled={notifications.inApp.socialNotifications}
                onChange={() => handleNotificationToggle('inApp', 'socialNotifications')}
                label="Social Notifications"
                description="Updates from shared tasks and collaborative features"
              />
              <NotificationToggle
                enabled={notifications.inApp.systemMaintenance}
                onChange={() => handleNotificationToggle('inApp', 'systemMaintenance')}
                label="System Maintenance"
                description="Scheduled maintenance and system update notifications"
              />
            </div>
          </div>

          {/* Notification Schedule */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-md font-medium text-text-primary mb-4 flex items-center">
              <Icon name="Clock" size={16} className="mr-2 text-text-secondary" />
              Quiet Hours
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Start Time
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>10:00 PM</option>
                  <option>11:00 PM</option>
                  <option>12:00 AM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  End Time
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>6:00 AM</option>
                  <option>7:00 AM</option>
                  <option>8:00 AM</option>
                </select>
              </div>
            </div>
            
            <p className="text-xs text-text-secondary mt-2">
              During quiet hours, only emergency alerts will be delivered
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSection;