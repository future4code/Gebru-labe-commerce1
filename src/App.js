import React from 'react';
import './App.css';
import styled from 'styled-components';
import CardProduto from './components/CardProduto'


import ImageAttackBall from '../img/ATTACKBALL.jpg'
import ImageDeathStar from '../img/DEATH.jpg'
import ImageDestroyer from '../img/DESTROYER.jpg'
import ImageDiscoveryNasa from '../img/DISCOVERY.jpg'
import ImageEndurance from '../img/ENDURANCE.jpg'
import ImageEnterprise from '../img/ENTERPRISENCC.jpg'
import ImageGunship from '../img/GUNSHIP.jpg'
import ImageMilllennium from '../img/MILLENIUMFALCON.jpg'
import ImageXuxa from '../img/XUXA.jpg'
import ImageArwing from '../img/ARWING.jpg'


const MainContainer = styled.div`
   margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "NAVE DA XUXA",
        preco: 999.000,
        foto: ImageXuxa,
        quantidade: 1,
      },
    {
      id: 2,
      nome: "ATTACK BALL",
      preco: 130.000,
      foto: ImageAttackBall,
      quantidade: 1,
    },
    {
      id: 3,
      nome: "DEATH STAR",
      preco: 900.000,
      foto:ImageDeathStar,
      quantidade: 1,
    },
    {
      id: 4,
      nome: "DESTROYER IMPERIAL",
      preco: 300.000,
      foto: ImageDestroyer,
      quantidade: 1,
    },
    {
      id: 5,
      nome: "DISCOVERY NASA",
      preco: 550.000,
      foto: ImageDiscoveryNasa,
      quantidade: 1,
    },
    {
      id: 6,
      nome: "ENDURANCE",
      preco: 850.000,
      foto: ImageEndurance,
      quantidade: 1,
    },
    {
      id: 7,
      nome: "ENTERPRISE NCC",
      preco: 750.000,
      foto: ImageEnterprise,
      quantidade: 1,
    },
    {
      id: 8,
      nome: "GUNSHIP",
      preco: 350.000,
      foto: ImageGunship,
      quantidade: 1,
    },
    {
      id: 9,
      nome: " MILLENIUM FALCON",
      preco: 999.000,
      foto: ImageMilllennium,
      quantidade: 1,
    },
    {
      id: 10,
      nome: "ARWING",
      preco: 150.000,
      foto: ImageArwing,
      quantidade: 1
    },
  ],
  
}
 
  render () {
const listaProdutos = this.state.produtos.map((produto) => {
  return <CardProduto
  nome={produto.nome}
  preco={produto.preco}
  foto={produto.foto}
  quantidade={produto.quantidade}
  />
});

    return (
      <MainContainer>
     {listaProdutos}
      </MainContainer>
    );  
  }
}

export default App;