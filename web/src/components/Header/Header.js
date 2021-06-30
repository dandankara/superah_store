import React from 'react'
import { ContainerHeader, HomeButton, CarButton, Search } from './styles'
import Carrinho from '../../assets/CartIcon.png'
import HomeIcon from '../../assets/HomeIcon.png'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router'

const Header = () => {
  return (
    
    <ContainerHeader>

      <HomeButton>
        <img src={HomeIcon} alt="HomeIcon" />
      </HomeButton>

      <Search placeholder="   Buscar" /> 

      <CarButton>
      <img src={Carrinho} alt="carrinho" />
      </CarButton>


    </ContainerHeader>
    
  )
}

export default Header
