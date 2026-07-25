import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './components/layout/MainLayout';
import { AppRoutes } from './routes/AppRoutes';
import { AppLoadingSplash } from './components/common/AppLoadingSplash';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLoadingSplash>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </AppLoadingSplash>
      </Router>
    </ThemeProvider>
  );
}

