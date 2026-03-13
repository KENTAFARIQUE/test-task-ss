import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { footballApi } from '../services/Api';
import Match from '../components/Match';

const CalendarView = () => {
  const { type, id } = useParams();
  const location = useLocation();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        let data;
        
        if (type === 'leagues') {
          data = await footballApi.getLeagueMatches(id);
          const leagueName = location.state?.leagueName;
          setTitle(`Матчи лиги ${leagueName}`);
        } else if (type === 'teams') {
          data = await footballApi.getTeamMatches(id);
          const teamName = location.state?.teamName;
          setTitle(`Матчи команды ${teamName}`);
        }
        
        setMatches(data.matches || []);
      } catch (error) {
        console.error('Ошибка загрузки матчей:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [type, id, location.state]);

  if (loading) return <div>Загрузка матчей...</div>;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {matches.map(match => (
            <Match key={match.id} match={match}/>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;