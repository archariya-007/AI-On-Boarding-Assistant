import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TaskList } from './components/TaskList';
import { AIAssistant } from './components/AIAssistant';
import { LanguageProvider } from './contexts/LanguageContext';
import { TaskProvider } from './contexts/TaskContext';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'tasks':
        return <TaskList />;
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <LanguageProvider>
      <TaskProvider>
        <div className="min-h-screen bg-gray-50 flex">
          <Sidebar currentView={currentView} onViewChange={setCurrentView} />
          <div className="flex-1 flex flex-col">
            <Header onToggleAI={() => setAiAssistantOpen(!aiAssistantOpen)} />
            <main className="flex-1 p-6 overflow-auto">
              {renderContent()}
            </main>
          </div>
          <AIAssistant isOpen={aiAssistantOpen} onToggle={() => setAiAssistantOpen(!aiAssistantOpen)} />
        </div>
      </TaskProvider>
    </LanguageProvider>
  );
}

export default App;