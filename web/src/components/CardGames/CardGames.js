import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CardGames = () => {

  const [game, setGame] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/games')
      .then((res => {
        setGame(res.data)
        console.log(res.data)
      }));
  }, []);

  return (

    <div>
      {game.map((games) => (
        <div>
          <li key={games.id}>
            <span> {games.name} </span>
            <span> {games.price} </span>
            <img src={games.image} alt="games" />
          </li>
        </div>
      ))}
    </div>

  )
}

export default CardGames;
