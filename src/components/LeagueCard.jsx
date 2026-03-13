import { useNavigate } from 'react-router';

function LeagueCard({ league }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/calendar/leagues/${league.id}`, {
      state: { leagueName: league.name } 
    });
  };

  return (
    <div 
      className="league-card" 
      style={{border: '1px solid #2b2b2b'}}
      onClick={handleClick}>
        <h1>{league.name}</h1> 
        <p>{league.area}</p> 
      <img src={league.emblem} alt={league.name} width="30" />
    </div>
  );
}

export default LeagueCard