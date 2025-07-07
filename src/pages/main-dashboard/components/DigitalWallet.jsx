import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DigitalWallet = () => {
  const [walletData] = useState({
    currentBalance: 2847.50,
    walletActivity: [
      {
        id: 1,
        recipient: "Sarah Johnson",
        amount: 150.00,
        status: "Completed",
        date: "2024-12-18",
        type: "sent"
      },
      {
        id: 2,
        recipient: "Mike Chen",
        amount: 75.25,
        status: "Pending",
        date: "2024-12-17",
        type: "received"
      },
      {
        id: 3,
        recipient: "Emma Wilson",
        amount: 200.00,
        status: "Completed",
        date: "2024-12-16",
        type: "sent"
      },
      {
        id: 4,
        recipient: "David Brown",
        amount: 50.00,
        status: "Completed",
        date: "2024-12-15",
        type: "received"
      },
      {
        id: 5,
        recipient: "Lisa Garcia",
        amount: 125.75,
        status: "Failed",
        date: "2024-12-14",
        type: "sent"
      }
    ]
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSendMoney = () => {
    // Mock functionality - would open send money modal/form
    console.log('Send money clicked');
  };

  const handleRequestPayment = () => {
    // Mock functionality - would open request payment modal/form
    console.log('Request payment clicked');
  };

  return (
    <div className="bg-surface rounded-lg shadow-md border border-border h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg">
            <Icon name="CreditCard" size={18} className="text-purple-600" />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">Digital Wallet</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Current Balance */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Current Balance</p>
              <p className="text-3xl font-bold mt-1">
                {formatCurrency(walletData.currentBalance)}
              </p>
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Icon name="Wallet" size={24} className="text-white" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            variant="primary"
            onClick={handleSendMoney}
            iconName="Send"
            iconPosition="left"
            fullWidth
          >
            Send Money
          </Button>
          
          <Button
            variant="outline"
            onClick={handleRequestPayment}
            iconName="Download"
            iconPosition="left"
            fullWidth
          >
            Request Payment
          </Button>
        </div>

        {/* Wallet Activity */}
        <div>
          <h3 className="text-md font-medium text-text-primary mb-4">Recent Activity</h3>
          
          <div className="space-y-3">
            {walletData.walletActivity.map(activity => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'sent' ?'bg-red-100' :'bg-green-100'
                  }`}>
                    <Icon 
                      name={activity.type === 'sent' ? 'ArrowUpRight' : 'ArrowDownLeft'} 
                      size={16} 
                      className={activity.type === 'sent' ? 'text-red-600' : 'text-green-600'} 
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{activity.recipient}</p>
                    <p className="text-xs text-text-secondary">
                      {activity.type === 'sent' ? 'Sent' : 'Received'} • {formatDate(activity.date)}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className={`text-sm font-semibold ${
                    activity.type === 'sent' ?'text-red-600' :'text-green-600'
                  }`}>
                    {activity.type === 'sent' ? '-' : '+'}{formatCurrency(activity.amount)}
                  </p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalWallet;