import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LeaguesView from './pages/Leagues';
import TeamsView from './pages/Teams';
import Header from "./components/Header"
import CalendarView from './pages/Calendar';
import './index.css';

import Background from './components/Background';
import { BackProvider } from './BackgroundContext';

function AppContent() {
  const location = useLocation();
  
  // Определяем страницу по пути
  const getPageFromPath = (path) => {
    if (path === '/') return 'home';
    const page = path.split('/')[1];
    return page || 'home';
  };

  const currentPage = getPageFromPath(location.pathname);
    return (
      <BackProvider page={currentPage}>
        <Background/>
          <div className="App">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/leagues" element={<LeaguesView />} />
              <Route path="/teams" element={<TeamsView />} />
              <Route path=":type/calendar/:id" element={<CalendarView />} />
            </Routes>
          </main> 
        </div>
      </BackProvider>
    )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
