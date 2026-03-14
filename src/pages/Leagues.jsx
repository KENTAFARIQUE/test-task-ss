import React, { useState, useEffect, useMemo  } from 'react';
import LeagueCard from '../components/LeagueCard'
import { useLeagues } from '../hooks/useLeagues';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

import './GridView.css'

const LeaguesView = () => {
  const { leagues, loading, error } = useLeagues();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // количество элементов на странице

  // Фильтруем лиги
  const filteredLeagues = useMemo(() => {
    if (!leagues) return [];
    
    return leagues.filter(league => {
      const searchLower = searchTerm.toLowerCase();
      return (
        league.name?.toLowerCase().includes(searchLower) ||
        league.area?.toLowerCase().includes(searchLower) ||
        league.code?.toLowerCase().includes(searchLower)
      );
    });
  }, [leagues, searchTerm]);

  // Сбрасываем страницу при изменении поиска
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // возвращаем на первую страницу
  };

  // Вычисляем пагинацию
  const totalPages = Math.ceil(filteredLeagues.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredLeagues.slice(startIndex, endIndex);

  if (loading) return <div><Spinner/></div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <div className="second-header">
        <h1 style={{ color: '#ffffff'}}>Лиги</h1>
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearch}
          placeholder="Поиск..."
        />
      </div>
      {filteredLeagues.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          {searchTerm ? 'Ничего не найдено' : 'Нет доступных лиг'}
        </div>
      ) : (
        <>
          <div className="grid">
            {currentItems.map(league => (
              <LeagueCard key={league.id} league={league} />
            ))}
          </div>
          
          <div>
            Показано {startIndex + 1}-{Math.min(endIndex, filteredLeagues.length)} из {filteredLeagues.length} лиг
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

export default LeaguesView;