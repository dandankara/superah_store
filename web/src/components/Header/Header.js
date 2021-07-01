import React from 'react'
import { ContainerHeader, HomeButton, CarButton, Search } from './styles'
import Carrinho from '../../assets/CartIcon.png'
import HomeIcon from '../../assets/HomeIcon.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

const Header = () => {
  return (

    <ContainerHeader>

      <Router>
      <Switch>
        <Route path="/" to="/">
          <HomeButton>
            <img src={HomeIcon} alt="HomeIcon" />
          </HomeButton>
        </Route>
      </Switch>

      <Search placeholder="   Buscar" />

      <CarButton>
        <img src={Carrinho} alt="carrinho" />
      </CarButton>

      </Router>


    </ContainerHeader>

  )
}

export default Header
