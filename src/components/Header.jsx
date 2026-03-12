import { useState } from 'react'
import Button from "./Button"

function Header() {
  const [count, setCount] = useState(0)

  return (
    <header className="Header">
        SoccerStat <Button text="Лига"/> <Button text="Комманды"/>
    </header>
  )
}

export default Header
