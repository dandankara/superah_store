import React from 'react'
import ContainerHeader from './style'
import Carrinho from '../../assets/CartIcon.png'
import HomeIcon from '../../assets/HomeIcon.png'

const Header = () => {
  return (
    <ContainerHeader>
      <button>
        <img src={HomeIcon} alt="Home" />
      </button>

      <input type="text" name="Buscar" placeholder="Busca" />

      <button>
      <img src={Carrinho} alt="carrinho" />
      </button>
    </ContainerHeader>
  )
}

export default Header
