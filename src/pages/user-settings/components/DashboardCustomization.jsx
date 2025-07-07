import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DashboardCustomization = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dashboardSettings, setDashboardSettings] = useState({
    modules: [
      { id: 'tasks', name: 'Task Management', enabled: true, order: 1, icon: 'CheckSquare' },
      { id: 'finance', name: 'Financial Overview', enabled: true, order: 2, icon: 'DollarSign' },
      { id: 'wallet', name: 'Digital Wallet', enabled: true, order: 3, icon: 'Wallet' },
      { id: 'fitness', name: 'Fitness Tracker', enabled: false, order: 4, icon: 'Activity' }
    ],
    theme: 'light',
    defaultView: 'dashboard',
    compactMode: false,
    showWelcomeMessage: true
  });

  const handleModuleToggle = (moduleId) => {
    setDashboardSettings(prev => ({
      ...prev,
      modules: prev.modules.map(module =>
        module.id === moduleId
          ? { ...module, enabled: !module.enabled }
          : module
      )
    }));
  };

  const handleSettingChange = (setting, value) => {
    setDashboardSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const moveModule = (moduleId, direction) => {
    setDashboardSettings(prev => {
      const modules = [...prev.modules];
      const moduleIndex = modules.findIndex(m => m.id === moduleId);
      const newIndex = direction === 'up' ? moduleIndex - 1 : moduleIndex + 1;
      
      if (newIndex >= 0 && newIndex < modules.length) {
        [modules[moduleIndex], modules[newIndex]] = [modules[newIndex], modules[moduleIndex]];
        
        // Update order values
        modules.forEach((module, index) => {
          module.order = index + 1;
        });
      }
      
      return { ...prev, modules };
    });
  };

  const ModuleItem = ({ module, index, totalModules }) => (
    <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg">
      <div className="flex items-center space-x-3">
        <Icon name={module.icon} size={16} className="text-text-secondary" />
        <span className="text-sm font-medium text-text-primary">{module.name}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="xs"
            iconName="ChevronUp"
            onClick={() => moveModule(module.id, 'up')}
            disabled={index === 0}
          />
          <Button
            variant="ghost"
            size="xs"
            iconName="ChevronDown"
            onClick={() => moveModule(module.id, 'down')}
            disabled={index === totalModules - 1}
          />
        </div>
        
        <button
          onClick={() => handleModuleToggle(module.id)}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            module.enabled ? 'bg-primary' : 'bg-secondary-300'
          }`}
        >
          <span
            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
              module.enabled ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-surface rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Layout" size={20} className="text-primary" />
          <h2 className="text-lg font-semibold text-text-primary">Dashboard Customization</h2>
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
          {/* Module Visibility & Order */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-md font-medium text-text-primary mb-4 flex items-center">
              <Icon name="Grid3X3" size={16} className="mr-2 text-text-secondary" />
              Module Visibility & Order
            </h3>
            
            <div className="space-y-3">
              {dashboardSettings.modules.map((module, index) => (
                <ModuleItem
                  key={module.id}
                  module={module}
                  index={index}
                  totalModules={dashboardSettings.modules.length}
                />
              ))}
            </div>
            
            <p className="text-xs text-text-secondary mt-3">
              Use the toggle switches to show/hide modules and arrow buttons to reorder them
            </p>
          </div>

          {/* Theme Selection */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-md font-medium text-text-primary mb-4 flex items-center">
              <Icon name="Palette" size={16} className="mr-2 text-text-secondary" />
              Theme Preferences
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'light', name: 'Light', icon: 'Sun' },
                { id: 'dark', name: 'Dark', icon: 'Moon' },
                { id: 'auto', name: 'Auto', icon: 'Monitor' }
              ].map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleSettingChange('theme', theme.id)}
                  className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all ${
                    dashboardSettings.theme === theme.id
                      ? 'border-primary bg-primary-50 text-primary' :'border-border bg-surface text-text-secondary hover:border-primary-200'
                  }`}
                >
                  <Icon name={theme.icon} size={16} />
                  <span className="text-sm font-medium">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Default View */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-md font-medium text-text-primary mb-4 flex items-center">
              <Icon name="Home" size={16} className="mr-2 text-text-secondary" />
              Default View
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'dashboard', name: 'Dashboard Overview', description: 'Show all enabled modules' },
                { id: 'tasks', name: 'Task Management', description: 'Focus on task management first' }
              ].map((view) => (
                <button
                  key={view.id}
                  onClick={() => handleSettingChange('defaultView', view.id)}
                  className={`text-left p-3 rounded-lg border-2 transition-all ${
                    dashboardSettings.defaultView === view.id
                      ? 'border-primary bg-primary-50' :'border-border bg-surface hover:border-primary-200'
                  }`}
                >
                  <p className={`text-sm font-medium ${
                    dashboardSettings.defaultView === view.id ? 'text-primary' : 'text-text-primary'
                  }`}>
                    {view.name}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">{view.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Display Options */}
          <div className="border border-border rounded-lg p-4">
            <h3 className="text-md font-medium text-text-primary mb-4 flex items-center">
              <Icon name="Settings" size={16} className="mr-2 text-text-secondary" />
              Display Options
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">Compact Mode</p>
                  <p className="text-xs text-text-secondary">Reduce spacing and show more content</p>
                </div>
                <button
                  onClick={() => handleSettingChange('compactMode', !dashboardSettings.compactMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    dashboardSettings.compactMode ? 'bg-primary' : 'bg-secondary-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      dashboardSettings.compactMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">Welcome Message</p>
                  <p className="text-xs text-text-secondary">Show personalized greeting on dashboard</p>
                </div>
                <button
                  onClick={() => handleSettingChange('showWelcomeMessage', !dashboardSettings.showWelcomeMessage)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    dashboardSettings.showWelcomeMessage ? 'bg-primary' : 'bg-secondary-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      dashboardSettings.showWelcomeMessage ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save Changes */}
          <div className="flex justify-end pt-4 border-t border-border">
            <Button variant="primary" iconName="Save">
              Save Dashboard Settings
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardCustomization;