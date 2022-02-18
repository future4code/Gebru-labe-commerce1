import React from 'react';
import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import {Home} from './components/Home/Home'
import Carrinho from './components/Home/Carrinho';


import ImageAttackBall from './img/ATTACK.jpg'
import ImageDeathStar from './img/DEATH.jpg'
import ImageDestroyer from './img/DESTROYER.jpg'
import ImageDiscoveryNasa from './img/DISCOVERY.jpg'
import ImageEndurance from './img/ENDURANCE.jpg'
import ImageEnterprise from './img/Enterprise.jpg'
import ImageGunship from './img/GUNSHIP.jpg'
import ImageMilllennium from './img/MILLENNIUM.jpg'
import ImageXuxa from './img/XUXA.jpg'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  padding: 15px;
  margin: 0;
`

const StyledContainer = styled.div`
  display: flex;
`

const products = [
  {
    id: 1,
    nome: "NAVE DA XUXA",
    preco: 999.000,
    foto: ImageXuxa,
  },
{
  id: 2,
  nome: "ATTACK BALL",
  preco: 130.000,
  foto: ImageAttackBall,
},
{
  id: 3,
  nome: "DEATH STAR",
  preco: 900.000,
  foto:ImageDeathStar,
},
{
  id: 4,
  nome: "DESTROYER IMPERIAL",
  preco: 300.000,
  foto: ImageDestroyer,
},
{
  id: 5,
  nome: "DISCOVERY NASA",
  preco: 550.000,
  foto: ImageDiscoveryNasa,
},
{
  id: 6,
  nome: "ENDURANCE",
  preco: 850.000,
  foto: ImageEndurance,
},
{
  id: 7,
  nome: "ENTERPRISE NCC",
  preco: 750.000,
  foto: ImageEnterprise,
},
{
  id: 8,
  nome: "GUNSHIP",
  preco: 350.000,
  foto: ImageGunship,
},
{
  id: 9,
  nome: " MILLENIUM FALCON",
  preco: 999.000,
  foto: ImageMilllennium,
}
];

class App extends React.Component {
  state = {
    quantity:0,
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: [],
    valorTotal: 0,

  }
    
  addProduct = (product) => {
    const productInCart = this.state.productsInCart.filter((item) => {
      if (item.id === product.id) {
        return item;
      }else{
        return false
      }
    });

    if (productInCart.length === 0) {
      product.quantidade = 1;
      const newCart = [product, ...this.state.productsInCart];
      
      this.setState({productInCart: newCart});
    } else {
      const newCart = this.state.productsInCart.map((item) => {
        if (product.id === item.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        } else {
          return item;
        }
      });

      this.setState({
        productInCart: newCart,
      });
    }
    this.adicionarValorTotal(product.preco);
  };

  adicionarValorTotal = (valor) => {
    this.setState({
      valorTotal: this.state.valorTotal + valor
    });
  };
  
  render () {
  return (
    <div>
      <Header />
        <StyledContainer>
          <AppContainer>
            <Home    
            products={products}
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            addProduct={this.addProduct}
            />
          </AppContainer>
          <Carrinho
          carrinho={this.state.productsInCart}
          valorTotal={this.state.valorTotal}
          removerItemDoCarrinho={this.removerItemDoCarrinho}
           />
        </StyledContainer>
      
    </div>
    );
  }
}

export default App;