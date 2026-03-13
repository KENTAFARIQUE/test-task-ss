import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LeaguesView from './pages/Leagues';
import TeamsView from './pages/Teams';
import Header from "./components/Header"
import CalendarView from './pages/Calendar';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leagues" element={<LeaguesView />} />
            <Route path="/teams" element={<TeamsView />} />
            <Route path="/calendar/:type/:id" element={<CalendarView />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
