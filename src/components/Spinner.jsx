import './styles/Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Загрузка...</p>
    </div>
  );
};

export default Spinner;