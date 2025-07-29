import React, { useState } from 'react';
import { CheckCircle, Circle, AlertTriangle, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTasks } from '../contexts/TaskContext';

export const TaskList: React.FC = () => {
  const { t } = useLanguage();
  const { tasks, toggleTask } = useTasks();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'environment', 'codebase', 'tools', 'documentation', 'testing', 'deployment'];

  const filteredTasks = selectedCategory === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <Star className="w-4 h-4 text-yellow-500" />;
      default:
        return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-red-200 bg-red-50';
      case 'medium':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Tasks' : t(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white rounded-lg p-6 shadow-sm border-2 transition-all hover:shadow-md ${
              task.completed ? 'border-green-200 bg-green-50' : getPriorityColor(task.priority)
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="mt-1 transition-colors"
                >
                  {task.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400 hover:text-blue-600" />
                  )}
                </button>
                
                <div className="flex-1">
                  <h4 className={`text-lg font-medium ${
                    task.completed ? 'text-green-800 line-through' : 'text-gray-900'
                  }`}>
                    {t(task.titleKey)}
                  </h4>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                      task.completed ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {t(task.category)}
                    </span>
                    <div className="flex items-center space-x-1">
                      {getPriorityIcon(task.priority)}
                      <span className="text-xs text-gray-600 capitalize">{task.priority}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  task.completed 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {task.completed ? t('completed') : t('inProgress')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};