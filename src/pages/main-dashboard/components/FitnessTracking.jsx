import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FitnessTracking = () => {
  const [fitnessData, setFitnessData] = useState({
    dailyMetrics: {
      steps: 8547,
      stepGoal: 10000,
      calories: 342,
      calorieGoal: 500,
      activeMinutes: 45,
      activeGoal: 60
    },
    weeklyGoal: {
      target: 70000,
      current: 52340,
      percentage: 75
    },
    plannedWorkouts: [
      {
        id: 1,
        name: "Morning Cardio",
        duration: "30 min",
        type: "Cardio",
        completed: true
      },
      {
        id: 2,
        name: "Strength Training",
        duration: "45 min",
        type: "Strength",
        completed: false
      },
      {
        id: 3,
        name: "Evening Yoga",
        duration: "20 min",
        type: "Flexibility",
        completed: false
      },
      {
        id: 4,
        name: "HIIT Workout",
        duration: "25 min",
        type: "HIIT",
        completed: false
      }
    ]
  });

  const handleWorkoutToggle = (workoutId) => {
    setFitnessData(prev => ({
      ...prev,
      plannedWorkouts: prev.plannedWorkouts.map(workout =>
        workout.id === workoutId
          ? { ...workout, completed: !workout.completed }
          : workout
      )
    }));
  };

  const handleSetGoal = () => {
    // Mock functionality - would open goal setting modal/form
    console.log('Set goal clicked');
  };

  const getProgressPercentage = (current, goal) => {
    return Math.min((current / goal) * 100, 100);
  };

  const getWorkoutIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'cardio':
        return 'Heart';
      case 'strength':
        return 'Dumbbell';
      case 'flexibility':
        return 'Flower2';
      case 'hiit':
        return 'Zap';
      default:
        return 'Activity';
    }
  };

  const getWorkoutColor = (type) => {
    switch (type.toLowerCase()) {
      case 'cardio':
        return 'bg-red-100 text-red-600';
      case 'strength':
        return 'bg-blue-100 text-blue-600';
      case 'flexibility':
        return 'bg-green-100 text-green-600';
      case 'hiit':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-surface rounded-lg shadow-md border border-border h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-orange-100 rounded-lg">
            <Icon name="Activity" size={18} className="text-orange-600" />
          </div>
          <h2 className="text-lg font-semibold text-text-primary">Fitness Tracking</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Daily Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Steps */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Footprints" size={20} className="text-blue-600" />
              <span className="text-xs text-blue-600 font-medium">
                {getProgressPercentage(fitnessData.dailyMetrics.steps, fitnessData.dailyMetrics.stepGoal).toFixed(0)}%
              </span>
            </div>
            <p className="text-sm text-blue-600 font-medium">Steps</p>
            <p className="text-lg font-bold text-blue-700">
              {fitnessData.dailyMetrics.steps.toLocaleString()}
            </p>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage(fitnessData.dailyMetrics.steps, fitnessData.dailyMetrics.stepGoal)}%` }}
              ></div>
            </div>
            <p className="text-xs text-blue-600 mt-1">Goal: {fitnessData.dailyMetrics.stepGoal.toLocaleString()}</p>
          </div>

          {/* Calories */}
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Flame" size={20} className="text-red-600" />
              <span className="text-xs text-red-600 font-medium">
                {getProgressPercentage(fitnessData.dailyMetrics.calories, fitnessData.dailyMetrics.calorieGoal).toFixed(0)}%
              </span>
            </div>
            <p className="text-sm text-red-600 font-medium">Calories</p>
            <p className="text-lg font-bold text-red-700">
              {fitnessData.dailyMetrics.calories}
            </p>
            <div className="w-full bg-red-200 rounded-full h-2 mt-2">
              <div 
                className="bg-red-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage(fitnessData.dailyMetrics.calories, fitnessData.dailyMetrics.calorieGoal)}%` }}
              ></div>
            </div>
            <p className="text-xs text-red-600 mt-1">Goal: {fitnessData.dailyMetrics.calorieGoal}</p>
          </div>

          {/* Active Minutes */}
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Clock" size={20} className="text-green-600" />
              <span className="text-xs text-green-600 font-medium">
                {getProgressPercentage(fitnessData.dailyMetrics.activeMinutes, fitnessData.dailyMetrics.activeGoal).toFixed(0)}%
              </span>
            </div>
            <p className="text-sm text-green-600 font-medium">Active Minutes</p>
            <p className="text-lg font-bold text-green-700">
              {fitnessData.dailyMetrics.activeMinutes}
            </p>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage(fitnessData.dailyMetrics.activeMinutes, fitnessData.dailyMetrics.activeGoal)}%` }}
              ></div>
            </div>
            <p className="text-xs text-green-600 mt-1">Goal: {fitnessData.dailyMetrics.activeGoal} min</p>
          </div>
        </div>

        {/* Weekly Goal Progress */}
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-md font-medium text-purple-700">Weekly Step Goal</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSetGoal}
              iconName="Target"
              iconPosition="left"
            >
              Set Goal
            </Button>
          </div>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-purple-600">
              {fitnessData.weeklyGoal.current.toLocaleString()} / {fitnessData.weeklyGoal.target.toLocaleString()} steps
            </span>
            <span className="text-sm font-medium text-purple-700">
              {fitnessData.weeklyGoal.percentage}%
            </span>
          </div>
          
          <div className="w-full bg-purple-200 rounded-full h-3">
            <div 
              className="bg-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${fitnessData.weeklyGoal.percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Planned Workouts */}
        <div>
          <h3 className="text-md font-medium text-text-primary mb-4">Today's Workouts</h3>
          
          <div className="space-y-3">
            {fitnessData.plannedWorkouts.map(workout => (
              <div
                key={workout.id}
                className={`p-3 rounded-lg border transition-all duration-200 ${
                  workout.completed 
                    ? 'bg-green-50 border-green-200' :'bg-surface border-border hover:border-primary-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleWorkoutToggle(workout.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                      workout.completed
                        ? 'bg-green-500 border-green-500' :'border-gray-300 hover:border-primary'
                    }`}
                  >
                    {workout.completed && (
                      <Icon name="Check" size={12} className="text-white" />
                    )}
                  </button>
                  
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getWorkoutColor(workout.type)}`}>
                    <Icon name={getWorkoutIcon(workout.type)} size={16} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-sm font-medium ${
                      workout.completed 
                        ? 'text-green-700 line-through' :'text-text-primary'
                    }`}>
                      {workout.name}
                    </h4>
                    <p className="text-xs text-text-secondary">
                      {workout.type} • {workout.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTracking;