import { useState } from 'react'
import { useNavigate } from 'react-router';
import './styles/header.css'


function Header() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (  
      <header className="Header">
          <div className="logo" onClick={() => navigate('/')}>
            SoccerStat
          </div> 
          <div className="nav-buttons">
          <button onClick={() => navigate('/leagues')}>Лиги</button>    
          <button onClick={() => navigate('/teams')}>Комманды</button>    
          </div>
          <button className="backButton" onClick={() => navigate('..')}> &lt; </button>
      </header>
  )
}

export default Header
