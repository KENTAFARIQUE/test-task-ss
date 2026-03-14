import { useNavigate } from 'react-router';

function TeamCard({ team }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/calendar/teams/${team.id}`, {
      state: { teamName: team.name } 
    });
  };

  return (
    <div 
      className="card" 
      onClick={handleClick}>
      <img src={team.crest} alt={team.name} width="30" />
      <h1>{team.name}</h1> 
    </div>
  );
}

export default TeamCard