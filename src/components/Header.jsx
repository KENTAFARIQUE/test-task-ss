import { useState } from 'react'
import { useNavigate } from 'react-router';
import Button from "./Button"

function Header() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <header className="Header">
        <div className="logo" onClick={() => navigate('/')}>
          SoccerStat
        </div> 
        <Button text="Лига" onClick={() => navigate('/leagues')}/> 
        <Button text="Комманды" onClick={() => navigate('/teams')}/>
    </header>
  )
}

export default Header
