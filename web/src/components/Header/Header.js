import React from 'react'
import { ContainerHeader, Home, Cart, Search } from './styles'
import Carrinho from '../../assets/CartIcon.png'
import HomeIcon from '../../assets/HomeIcon.png'

const Header = () => {
  return (
    <ContainerHeader>

      <Home>
        <button>
        <input type="image" src={HomeIcon} alt="HomeIcon" />
        </button>

      </Home>

      <Search placeholder="Buscar" /> 

      <Cart>
      <img src={Carrinho} alt="carrinho" />
      </Cart>


    </ContainerHeader>
  )
}

export default Header
