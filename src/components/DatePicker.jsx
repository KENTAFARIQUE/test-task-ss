const DatePicker = ({ dateFrom, dateTo, onDateFromChange, onDateToChange }) => {
  
  const setToday = () => {
    const today = new Date().toISOString().split('T')[0];
    onDateFromChange(today);
    onDateToChange(today);
  };

  const setThisWeek = () => {
    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);
    
    onDateFromChange(weekAgo.toISOString().split('T')[0]);
    onDateToChange(today.toISOString().split('T')[0]);
  };

  const setThisMonth = () => {
    const today = new Date();
    const monthAgo = new Date();
    monthAgo.setMonth(today.getMonth() - 1);
    
    onDateFromChange(monthAgo.toISOString().split('T')[0]);
    onDateToChange(today.toISOString().split('T')[0]);
  };

  return (
    <div>
      <div>
        <div>
          <label>С:</label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => onDateFromChange(e.target.value)}
            max={dateTo}
          />
        </div>
        
        <div>
          <label>По:</label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => onDateToChange(e.target.value)}
            min={dateFrom}
          />
        </div>
      </div>
      
      <div>
        <button onClick={setToday}>
          Сегодня
        </button>
        <button onClick={setThisWeek}>
          Неделя
        </button>
        <button onClick={setThisMonth}>
          Месяц
        </button>
      </div>
    </div>
  );
};


export default DatePicker;