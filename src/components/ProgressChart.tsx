import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTasks } from '../contexts/TaskContext';

export const ProgressChart: React.FC = () => {
  const { t } = useLanguage();
  const { tasks } = useTasks();

  const categories = ['environment', 'codebase', 'tools', 'documentation', 'testing', 'deployment'];
  
  const categoryData = categories.map(category => {
    const categoryTasks = tasks.filter(task => task.category === category);
    const completed = categoryTasks.filter(task => task.completed).length;
    const total = categoryTasks.length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    
    return {
      category,
      completed,
      total,
      percentage,
      color: getCategoryColor(category)
    };
  });

  function getCategoryColor(category: string): string {
    const colors = {
      environment: 'bg-blue-500',
      codebase: 'bg-green-500',
      tools: 'bg-purple-500',
      documentation: 'bg-yellow-500',
      testing: 'bg-red-500',
      deployment: 'bg-indigo-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  }

  return (
    <div className="space-y-4">
      {categoryData.map((data) => (
        <div key={data.category} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 capitalize">
              {t(data.category)}
            </span>
            <span className="text-sm text-gray-600">
              {data.completed}/{data.total} ({Math.round(data.percentage)}%)
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${data.color}`}
              style={{ width: `${data.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};