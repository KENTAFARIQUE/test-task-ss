// components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = 'Поиск...' }) => {
  return (
    <div style={{
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '10px 15px',
          width: '100%',
          maxWidth: '400px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          fontSize: '16px'
        }}
      />
    </div>
  );
};

export default SearchBar;