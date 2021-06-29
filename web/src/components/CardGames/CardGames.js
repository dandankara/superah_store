import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ContainerCard, Card, CardGame } from './styles'

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

    <ContainerCard>
      {game.map((games) => (
        <Card>

          <CardGame>
            <span> {games.name} </span>
            <img src={games.image} alt="gamesphoto" /> <br />
            <span> R${games.price} </span>
          </CardGame>


        </Card>
      ))}
    </ContainerCard>

  )
}

export default CardGames;
