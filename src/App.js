import React from 'react';
import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import {Home} from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Filtro from './components/Filtro/Filtro'
import Carrinho from './components/Carrinho';

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
  grid-template-columns: 1fr 2fr 1fr;
  padding: 15px;
  margin: 0;
  background-color: #4682B4;
`

const products = [
  {
    id: 1,
    title: 'NAVE DA XUXA',
    cost: 999,
    image: ImageXuxa,
  },
{
  id: 2,
  title: 'DEATH STAR',
  cost: 900,
  image:ImageDeathStar,
},
{
  id: 3,
  title: 'DESTROYER IMPERIAL',
  cost: 900,
  image: ImageDestroyer,
},
{
  id: 4,
  title: 'DISCOVERY NASA',
  cost: 550,
  image: ImageDiscoveryNasa,
},
{
  id: 5,
  title: 'ENDURANCE',
  cost: 850,
  image: ImageEndurance,
},
{
  id: 6,
  title: 'ENTERPRISE NCC',
  cost: 750,
  image: ImageEnterprise,
},
{
  id: 7,
  title: 'GUNSHIP',
  cost: 350,
  image: ImageGunship,
},
{
  id: 8,
  title: 'MILLENIUM FALCON',
  cost: 999,
  image: ImageMilllennium,
}
]

export default class App extends React.Component {
  state = {
    quantity:0,
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: []
  }


  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeTitleFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart){
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return{
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })
      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)
      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <>
      <Header/>
      <AppContainer>
        <Filtro 
        maxFilter = {this.state.maxFilter}
        minFilter = {this.state.minFilter}
        nameFilter = {this.state.nameFilter}
        onChangeMaxFilter = {this.onChangeMaxFilter}
        onChangeMinFilter = {this.onChangeMinFilter}
        onChangeTitleFilter = {this.onChangeTitleFilter}      
        />
        <Home    
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}/>
        <Carrinho 
          products={this.state.productsInCart}
          onRemoveProductFromCart ={this.onRemoveProductFromCart}
        /> 
      </AppContainer>
      <Footer/>
      </>
    );
  }
}


