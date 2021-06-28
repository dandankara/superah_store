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
        <div className="Container">

          <div className="Name">
            <span> {games.name} </span>
          </div>

         <img src={games.image} alt="gamesphoto" /> <br />

            <span> {games.price} </span>
        </div>
      ))}
    </div>

  )
}

export default CardGames;
