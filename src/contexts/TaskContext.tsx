import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Task {
  id: string;
  titleKey: string;
  category: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

interface TaskContextType {
  tasks: Task[];
  toggleTask: (taskId: string) => void;
  getTasksByCategory: (category: string) => Task[];
  getCompletionStats: () => { completed: number; total: number; percentage: number };
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const initialTasks: Task[] = [
  { id: '1', titleKey: 'setupIDE', category: 'environment', completed: false, priority: 'high' },
  { id: '2', titleKey: 'cloneRepo', category: 'environment', completed: false, priority: 'high' },
  { id: '3', titleKey: 'installDeps', category: 'environment', completed: false, priority: 'high' },
  { id: '4', titleKey: 'configureEnv', category: 'environment', completed: false, priority: 'medium' },
  { id: '5', titleKey: 'reviewArchitecture', category: 'codebase', completed: false, priority: 'high' },
  { id: '6', titleKey: 'exploreCodebase', category: 'codebase', completed: false, priority: 'high' },
  { id: '7', titleKey: 'readCodingStandards', category: 'codebase', completed: false, priority: 'medium' },
  { id: '8', titleKey: 'setupTooling', category: 'tools', completed: false, priority: 'medium' },
  { id: '9', titleKey: 'learnFramework', category: 'tools', completed: false, priority: 'high' },
  { id: '10', titleKey: 'reviewAPI', category: 'documentation', completed: false, priority: 'medium' },
  { id: '11', titleKey: 'writeFirstTest', category: 'testing', completed: false, priority: 'high' },
  { id: '12', titleKey: 'runTestSuite', category: 'testing', completed: false, priority: 'medium' },
  { id: '13', titleKey: 'setupDeployment', category: 'deployment', completed: false, priority: 'low' },
  { id: '14', titleKey: 'deployToStaging', category: 'deployment', completed: false, priority: 'low' }
];

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getTasksByCategory = (category: string) => {
    return tasks.filter(task => task.category === category);
  };

  const getCompletionStats = () => {
    const completed = tasks.filter(task => task.completed).length;
    const total = tasks.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  };

  return (
    <TaskContext.Provider value={{ tasks, toggleTask, getTasksByCategory, getCompletionStats }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};