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
      className="team-card" 
      onClick={handleClick}
      style={{border: '1px solid #2b2b2b', cursor: 'pointer'}}>
        <img src={team.crest} alt={team.name} width="30" />
        <h1>{team.name}</h1> 
    </div>
  );
}

export default TeamCard