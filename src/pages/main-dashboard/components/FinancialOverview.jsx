import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';

const FinancialOverview = () => {
  const [financialData] = useState({
    totalBalance: 12450.75,
    monthlyIncome: 5200.00,
    monthlyExpenses: 3150.25,
    chartData: [
      { name: 'Week 1', income: 1300, expenses: 850 },
      { name: 'Week 2', income: 1200, expenses: 920 },
      { name: 'Week 3', income: 1350, expenses: 780 },
      { name: 'Week 4', income: 1350, expenses: 600 }
    ],
    recentTransactions: [
      {
        id: 1,
        name: "Salary Deposit",
        category: "Income",
        date: "2024-12-18",
        amount: 5200.00,
        type: "income"
      },
      {
        id: 2,
        name: "Grocery Shopping",
        category: "Food",
        date: "2024-12-17",
        amount: -125.50,
        type: "expense"
      },
      {
        id: 3,
        name: "Freelance Project",
        category: "Income",
        date: "2024-12-16",
        amount: 800.00,
        type: "income"
      },
      {
        id: 4,
        name: "Electricity Bill",
        category: "Utilities",
        date: "2024-12-15",
        amount: -89.25,
        type: "expense"
      },
      {
        id: 5,
        name: "Coffee Shop",
        category: "Food",
        date: "2024-12-14",
        amount: -12.75,
        type: "expense"
      }
    ]
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-text-primary">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey === 'income' ? 'Income' : 'Expenses'}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-surface rounded-lg shadow-md border border-border h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg">
            <Icon name="DollarSign" size={18} className="text-green-600" />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">Financial Overview</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-primary-600 font-medium">Total Balance</p>
                <p className="text-xl font-bold text-primary-700">
                  {formatCurrency(financialData.totalBalance)}
                </p>
              </div>
              <Icon name="Wallet" size={24} className="text-primary-600" />
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium">Monthly Income</p>
                <p className="text-xl font-bold text-green-700">
                  {formatCurrency(financialData.monthlyIncome)}
                </p>
              </div>
              <Icon name="TrendingUp" size={24} className="text-green-600" />
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600 font-medium">Monthly Expenses</p>
                <p className="text-xl font-bold text-red-700">
                  {formatCurrency(financialData.monthlyExpenses)}
                </p>
              </div>
              <Icon name="TrendingDown" size={24} className="text-red-600" />
            </div>
          </div>
        </div>

        {/* Income vs Expenses Chart */}
        <div className="mb-6">
          <h3 className="text-md font-medium text-text-primary mb-3">Income vs Expenses (Last 30 Days)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financialData.chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="text-md font-medium text-text-primary mb-3">Recent Transactions</h3>
          <div className="space-y-3">
            {financialData.recentTransactions.map(transaction => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-surface-secondary rounded-lg border border-border">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'income' ?'bg-green-100' :'bg-red-100'
                  }`}>
                    <Icon 
                      name={transaction.type === 'income' ? 'ArrowDownLeft' : 'ArrowUpRight'} 
                      size={16} 
                      className={transaction.type === 'income' ? 'text-green-600' : 'text-red-600'} 
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{transaction.name}</p>
                    <p className="text-xs text-text-secondary">{transaction.category} • {formatDate(transaction.date)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${
                    transaction.type === 'income' ?'text-green-600' :'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;