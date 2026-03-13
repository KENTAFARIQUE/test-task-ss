// components/PaginationWithNumbers.jsx
import React from 'react';

const PaginationWithNumbers = ({ currentPage, totalPages, onPageChange }) => {
  // Создаем массив номеров страниц
  const getPageNumbers = () => {
    const delta = 2; // сколько страниц показывать по бокам от текущей
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '5px',
      marginTop: '20px',
      padding: '20px'
    }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={buttonStyle(currentPage === 1)}
      >
        ←
      </button>
      
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          disabled={page === '...'}
          style={{
            ...buttonStyle(page === '...'),
            ...(page === currentPage ? activeButtonStyle : {}),
            minWidth: '40px'
          }}
        >
          {page}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={buttonStyle(currentPage === totalPages)}
      >
        →
      </button>
    </div>
  );
};

const buttonStyle = (disabled) => ({
  padding: '8px 12px',
  backgroundColor: disabled ? '#ccc' : '#f0f0f0',
  color: disabled ? '#666' : '#333',
  border: '1px solid #ddd',
  borderRadius: '4px',
  cursor: disabled ? 'not-allowed' : 'pointer',
  fontSize: '14px'
});

const activeButtonStyle = {
  backgroundColor: '#1976d2',
  color: 'white',
  border: '1px solid #1976d2'
};

export default PaginationWithNumbers;