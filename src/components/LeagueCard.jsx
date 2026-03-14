import { useNavigate } from 'react-router';
import './styles/Card.css'

function LeagueCard({ league }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`./calendar/${league.id}`, {
      state: { leagueName: league.name } 
    });
  };

  return (
    <div 
      className="card" 
      onClick={handleClick}>
        <img src={league.emblem} alt={league.name}/>
        <h1>{league.name}</h1> 
        <p>{league.area}</p> 
    </div>  
  );
}

export default LeagueCard