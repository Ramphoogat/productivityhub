import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project proposal",
      dueDate: "2024-12-20",
      category: "Work",
      completed: false,
      isOverdue: false
    },
    {
      id: 2,
      title: "Review quarterly reports",
      dueDate: "2024-12-15",
      category: "Work",
      completed: true,
      isOverdue: false
    },
    {
      id: 3,
      title: "Buy groceries",
      dueDate: "2024-12-10",
      category: "Personal",
      completed: false,
      isOverdue: true
    },
    {
      id: 4,
      title: "Schedule dentist appointment",
      dueDate: "2024-12-25",
      category: "Health",
      completed: false,
      isOverdue: false
    },
    {
      id: 5,
      title: "Update portfolio website",
      dueDate: "2024-12-30",
      category: "Personal",
      completed: false,
      isOverdue: false
    }
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    dueDate: '',
    category: 'Work'
  });

  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const categories = ['All', 'Work', 'Personal', 'Health'];
  const statusOptions = ['All', 'Completed', 'Pending', 'Overdue'];

  const handleTaskToggle = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const handleAddTask = () => {
    if (newTask.title.trim() && newTask.dueDate) {
      const task = {
        id: Date.now(),
        title: newTask.title.trim(),
        dueDate: newTask.dueDate,
        category: newTask.category,
        completed: false,
        isOverdue: new Date(newTask.dueDate) < new Date()
      };
      
      setTasks([...tasks, task]);
      setNewTask({ title: '', dueDate: '', category: 'Work' });
    }
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => {
      const categoryMatch = filterCategory === 'All' || task.category === filterCategory;
      const statusMatch = filterStatus === 'All' || 
        (filterStatus === 'Completed' && task.completed) ||
        (filterStatus === 'Pending' && !task.completed && !task.isOverdue) ||
        (filterStatus === 'Overdue' && task.isOverdue && !task.completed);
      
      return categoryMatch && statusMatch;
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Work': 'bg-blue-100 text-blue-800',
      'Personal': 'bg-green-100 text-green-800',
      'Health': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-surface rounded-lg shadow-md border border-border h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
            <Icon name="CheckSquare" size={18} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">Task Management</h2>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {statusOptions.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {getFilteredTasks().map(task => (
            <div
              key={task.id}
              className={`p-3 rounded-lg border transition-all duration-200 ${
                task.completed 
                  ? 'bg-green-50 border-green-200' 
                  : task.isOverdue 
                    ? 'bg-red-50 border-red-200' :'bg-surface border-border hover:border-primary-200'
              }`}
            >
              <div className="flex items-start space-x-3">
                <button
                  onClick={() => handleTaskToggle(task.id)}
                  className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                    task.completed
                      ? 'bg-green-500 border-green-500' :'border-gray-300 hover:border-primary'
                  }`}
                >
                  {task.completed && (
                    <Icon name="Check" size={12} className="text-white" />
                  )}
                </button>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-medium ${
                    task.completed 
                      ? 'text-green-700 line-through' 
                      : task.isOverdue 
                        ? 'text-red-700' :'text-text-primary'
                  }`}>
                    {task.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>
                      {task.category}
                    </span>
                    <span className={`text-xs ${
                      task.isOverdue && !task.completed 
                        ? 'text-red-600 font-medium' :'text-text-secondary'
                    }`}>
                      Due {formatDate(task.dueDate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Task Form */}
      <div className="p-4 border-t border-border bg-surface-secondary">
        <div className="space-y-3">
          <Input
            type="text"
            placeholder="Enter task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="w-full"
          />
          
          <div className="flex gap-3">
            <Input
              type="date"
              value={newTask.dueDate}
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              className="flex-1"
            />
            
            <select
              value={newTask.category}
              onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
              className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Health">Health</option>
            </select>
          </div>
          
          <Button
            variant="primary"
            onClick={handleAddTask}
            iconName="Plus"
            iconPosition="left"
            fullWidth
            disabled={!newTask.title.trim() || !newTask.dueDate}
          >
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;