import React from 'react';
import { CheckCircle, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTasks } from '../contexts/TaskContext';
import { ProgressChart } from './ProgressChart';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const { tasks, getCompletionStats } = useTasks();
  const stats = getCompletionStats();

  const categoryStats = {
    environment: tasks.filter(t => t.category === 'environment').length,
    codebase: tasks.filter(t => t.category === 'codebase').length,
    tools: tasks.filter(t => t.category === 'tools').length,
    documentation: tasks.filter(t => t.category === 'documentation').length,
    testing: tasks.filter(t => t.category === 'testing').length,
    deployment: tasks.filter(t => t.category === 'deployment').length
  };

  const recentTasks = tasks.filter(task => task.completed).slice(-5);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t('completedTasks')}</p>
              <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t('totalTasks')}</p>
              <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
            </div>
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t('overallProgress')}</p>
              <p className="text-3xl font-bold text-purple-600">{stats.percentage}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('progress')} by Category</h3>
        <ProgressChart />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('recentActivity')}</h3>
        {recentTasks.length > 0 ? (
          <div className="space-y-3">
            {recentTasks.map((task) => (
              <div key={task.id} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{t(task.titleKey)}</p>
                  <p className="text-xs text-gray-600 capitalize">{t(task.category)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">No completed tasks yet. Start working on your onboarding tasks!</p>
          </div>
        )}
      </div>
    </div>
  );
};