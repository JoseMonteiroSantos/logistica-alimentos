import React from 'react'
import Button from '../Button/button'
import logo from '../../assets/logo-tech-food.png'
import {Container} from './styles'

const Header = () => {
  return (
    <Container>
      <div className='header'>
        <img src={logo} alt='Logo Tech Food' className='logo'/>
        <div className='techfood'>TECH \r FOOD</div>
        <div className='vl'></div>
        <Button>Início</Button>
        <Button>Sobre</Button>
        <Button>Produtos</Button>
        <Button>Fale Conosco</Button>
      </div>
    </Container>
  )
}

export default Header
