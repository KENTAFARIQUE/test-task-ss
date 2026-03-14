// pages/Commands/TeamsView.jsx
import React, { useState, useMemo } from 'react';
import TeamCard from '../components/TeamCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { useTeams } from '../hooks/useTeams';

import './GridView.css'

const TeamsView = () => {
  const { teams, loading, error } = useTeams();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // количество команд на странице

  // Фильтруем команды по поиску
  const filteredTeams = useMemo(() => {
    if (!teams) return [];
    
    return teams.filter(team => {
      const searchLower = searchTerm.toLowerCase();
      return (
        team.name?.toLowerCase().includes(searchLower) ||
        team.area?.toLowerCase().includes(searchLower) ||
        team.venue?.toLowerCase().includes(searchLower)
      );
    });
  }, [teams, searchTerm]);

  // Сбрасываем на первую страницу при новом поиске
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  // Вычисляем пагинацию
  const totalPages = Math.ceil(filteredTeams.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTeams = filteredTeams.slice(startIndex, endIndex);

  if (loading) return <div>Загрузка команд...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h1>Футбольные команды</h1>
      
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
        placeholder="Поиск..."
      />
      
      {filteredTeams.length === 0 ? (
        <div>
          {searchTerm ? 'По вашему запросу ничего не найдено' : 'Нет доступных команд'}
        </div>
      ) : (
        <>
        <div className="grid">
            {currentTeams.map(team => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
          <div>
            Показано {startIndex + 1}-{Math.min(endIndex, filteredTeams.length)} из {filteredTeams.length} команд
          </div>
          
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};


export default TeamsView;