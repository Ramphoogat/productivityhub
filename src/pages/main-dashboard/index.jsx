import React from 'react';
import MainAppHeader from '../../components/ui/MainAppHeader';
import TaskManagement from './components/TaskManagement';
import FinancialOverview from './components/FinancialOverview';
import DigitalWallet from './components/DigitalWallet';
import FitnessTracking from './components/FitnessTracking';

const MainDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <MainAppHeader />
      
      {/* Main Content */}
      <main className="pt-15">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-text-primary font-heading">
              Dashboard Overview
            </h1>
            <p className="text-text-secondary mt-1">
              Manage your productivity, finances, and wellness in one place
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-180px)]">
            {/* Task Management */}
            <div className="h-full">
              <TaskManagement />
            </div>

            {/* Financial Overview */}
            <div className="h-full">
              <FinancialOverview />
            </div>

            {/* Digital Wallet */}
            <div className="h-full">
              <DigitalWallet />
            </div>

            {/* Fitness Tracking */}
            <div className="h-full">
              <FitnessTracking />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainDashboard;