import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ContainerCard, CardGame } from './styles'

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
          <CardGame>
            <span> {games.name} </span>
            <img src={games.image} alt="gamesphoto" /> <br />
            <span> R${games.price} </span>
            <button>Adicionar ao Carrinho</button>
          </CardGame>
      ))}
    </ContainerCard>

  )
}

export default CardGames;
