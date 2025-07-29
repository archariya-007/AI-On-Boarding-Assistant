import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    dashboard: 'Dashboard',
    tasks: 'Tasks',
    progress: 'Progress',
    aiAssistant: 'AI Assistant',
    welcome: 'Welcome to Developer Onboarding',
    completedTasks: 'Completed Tasks',
    totalTasks: 'Total Tasks',
    overallProgress: 'Overall Progress',
    recentActivity: 'Recent Activity',
    askAI: 'Ask AI Assistant',
    environment: 'Environment Setup',
    codebase: 'Codebase Familiarization',
    tools: 'Development Tools',
    documentation: 'Documentation Review',
    testing: 'Testing & Quality Assurance',
    deployment: 'Deployment Process',
    completed: 'Completed',
    inProgress: 'In Progress',
    notStarted: 'Not Started',
    markComplete: 'Mark as Complete',
    markIncomplete: 'Mark as Incomplete',
    aiHelp: 'How can I help you today?',
    setupIDE: 'Set up development environment and IDE',
    cloneRepo: 'Clone the project repository',
    installDeps: 'Install project dependencies',
    configureEnv: 'Configure environment variables',
    reviewArchitecture: 'Review system architecture documentation',
    exploreCodebase: 'Explore main codebase structure',
    readCodingStandards: 'Read coding standards and guidelines',
    setupTooling: 'Set up development tooling (linters, formatters)',
    learnFramework: 'Learn about the main framework/technology stack',
    reviewAPI: 'Review API documentation',
    writeFirstTest: 'Write your first unit test',
    runTestSuite: 'Run the complete test suite',
    setupDeployment: 'Set up deployment pipeline access',
    deployToStaging: 'Deploy changes to staging environment'
  },
  es: {
    dashboard: 'Tablero',
    tasks: 'Tareas',
    progress: 'Progreso',
    aiAssistant: 'Asistente IA',
    welcome: 'Bienvenido a la Incorporación de Desarrolladores',
    completedTasks: 'Tareas Completadas',
    totalTasks: 'Total de Tareas',
    overallProgress: 'Progreso General',
    recentActivity: 'Actividad Reciente',
    askAI: 'Pregunta al Asistente IA',
    environment: 'Configuración del Entorno',
    codebase: 'Familiarización con el Código',
    tools: 'Herramientas de Desarrollo',
    documentation: 'Revisión de Documentación',
    testing: 'Pruebas y Aseguramiento de Calidad',
    deployment: 'Proceso de Despliegue',
    completed: 'Completado',
    inProgress: 'En Progreso',
    notStarted: 'No Iniciado',
    markComplete: 'Marcar como Completado',
    markIncomplete: 'Marcar como Incompleto',
    aiHelp: '¿Cómo puedo ayudarte hoy?',
    setupIDE: 'Configurar entorno de desarrollo e IDE',
    cloneRepo: 'Clonar el repositorio del proyecto',
    installDeps: 'Instalar dependencias del proyecto',
    configureEnv: 'Configurar variables de entorno',
    reviewArchitecture: 'Revisar documentación de arquitectura del sistema',
    exploreCodebase: 'Explorar la estructura principal del código',
    readCodingStandards: 'Leer estándares y pautas de codificación',
    setupTooling: 'Configurar herramientas de desarrollo (linters, formateadores)',
    learnFramework: 'Aprender sobre el framework/stack tecnológico principal',
    reviewAPI: 'Revisar documentación de API',
    writeFirstTest: 'Escribir tu primera prueba unitaria',
    runTestSuite: 'Ejecutar la suite completa de pruebas',
    setupDeployment: 'Configurar acceso al pipeline de despliegue',
    deployToStaging: 'Desplegar cambios al entorno de staging'
  },
  fr: {
    dashboard: 'Tableau de Bord',
    tasks: 'Tâches',
    progress: 'Progrès',
    aiAssistant: 'Assistant IA',
    welcome: 'Bienvenue dans l\'Intégration des Développeurs',
    completedTasks: 'Tâches Terminées',
    totalTasks: 'Total des Tâches',
    overallProgress: 'Progrès Global',
    recentActivity: 'Activité Récente',
    askAI: 'Demander à l\'Assistant IA',
    environment: 'Configuration de l\'Environnement',
    codebase: 'Familiarisation avec le Code',
    tools: 'Outils de Développement',
    documentation: 'Révision de la Documentation',
    testing: 'Tests et Assurance Qualité',
    deployment: 'Processus de Déploiement',
    completed: 'Terminé',
    inProgress: 'En Cours',
    notStarted: 'Pas Commencé',
    markComplete: 'Marquer comme Terminé',
    markIncomplete: 'Marquer comme Incomplet',
    aiHelp: 'Comment puis-je vous aider aujourd\'hui?',
    setupIDE: 'Configurer l\'environnement de développement et l\'IDE',
    cloneRepo: 'Cloner le dépôt du projet',
    installDeps: 'Installer les dépendances du projet',
    configureEnv: 'Configurer les variables d\'environnement',
    reviewArchitecture: 'Réviser la documentation d\'architecture du système',
    exploreCodebase: 'Explorer la structure principale du code',
    readCodingStandards: 'Lire les standards et directives de codage',
    setupTooling: 'Configurer les outils de développement (linters, formateurs)',
    learnFramework: 'Apprendre le framework/stack technologique principal',
    reviewAPI: 'Réviser la documentation API',
    writeFirstTest: 'Écrire votre premier test unitaire',
    runTestSuite: 'Exécuter la suite complète de tests',
    setupDeployment: 'Configurer l\'accès au pipeline de déploiement',
    deployToStaging: 'Déployer les changements vers l\'environnement de staging'
  },
  de: {
    dashboard: 'Dashboard',
    tasks: 'Aufgaben',
    progress: 'Fortschritt',
    aiAssistant: 'KI-Assistent',
    welcome: 'Willkommen beim Entwickler-Onboarding',
    completedTasks: 'Erledigte Aufgaben',
    totalTasks: 'Gesamte Aufgaben',
    overallProgress: 'Gesamtfortschritt',
    recentActivity: 'Kürzliche Aktivität',
    askAI: 'KI-Assistenten fragen',
    environment: 'Umgebungseinrichtung',
    codebase: 'Codebase-Einarbeitung',
    tools: 'Entwicklungstools',
    documentation: 'Dokumentationsüberprüfung',
    testing: 'Testen & Qualitätssicherung',
    deployment: 'Deployment-Prozess',
    completed: 'Abgeschlossen',
    inProgress: 'In Bearbeitung',
    notStarted: 'Nicht Begonnen',
    markComplete: 'Als Abgeschlossen Markieren',
    markIncomplete: 'Als Unvollständig Markieren',
    aiHelp: 'Wie kann ich Ihnen heute helfen?',
    setupIDE: 'Entwicklungsumgebung und IDE einrichten',
    cloneRepo: 'Projekt-Repository klonen',
    installDeps: 'Projektabhängigkeiten installieren',
    configureEnv: 'Umgebungsvariablen konfigurieren',
    reviewArchitecture: 'Systemarchitekturdokumentation überprüfen',
    exploreCodebase: 'Hauptcodebase-Struktur erkunden',
    readCodingStandards: 'Codierungsstandards und -richtlinien lesen',
    setupTooling: 'Entwicklungstools einrichten (Linters, Formatter)',
    learnFramework: 'Hauptframework/Technologie-Stack lernen',
    reviewAPI: 'API-Dokumentation überprüfen',
    writeFirstTest: 'Ersten Unit-Test schreiben',
    runTestSuite: 'Vollständige Test-Suite ausführen',
    setupDeployment: 'Deployment-Pipeline-Zugang einrichten',
    deployToStaging: 'Änderungen in Staging-Umgebung deployen'
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};