import React from 'react';
import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import {Home} from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Filtro from './components/Filtro/Filtro'
import CardProduto from './components/Home/CardProduto'
import Carrinho from './components/Home/Carrinho';

import ImageDeathStar from './img/DEATH.jpg'
import ImageDestroyer from './img/DESTROYER.jpg'
import ImageDiscoveryNasa from './img/DISCOVERY.jpg'
import ImageEndurance from './img/ENDURANCE.jpg'
import ImageEnterprise from './img/Enterprise.jpg'
import ImageGunship from './img/GUNSHIP.jpg'
import ImageMilllennium from './img/MILLENNIUM.jpg'
import ImageXuxa from './img/XUXA.jpg'

const ListContainer = styled.div`
   width: 50%;
   height: 70vh;
   margin: 15px 50px;
   border:  1px double #a8bd9b;
   background-color: violet;
  
`
const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  padding: 15px;
  margin: 0;
  background-color: #5F9EA0;
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
  nome: "DEATH STAR",
  preco: 900.000,
  foto:ImageDeathStar,
},
{
  id: 3,
  nome: "DESTROYER IMPERIAL",
  preco: 300.000,
  foto: ImageDestroyer,
},
{
  id: 4,
  nome: "DISCOVERY NASA",
  preco: 550.000,
  foto: ImageDiscoveryNasa,
},
{
  id: 5,
  nome: "ENDURANCE",
  preco: 850.000,
  foto: ImageEndurance,
},
{
  id: 6,
  nome: "ENTERPRISE NCC",
  preco: 750.000,
  foto: ImageEnterprise,
},
{
  id: 7,
  nome: "GUNSHIP",
  preco: 350.000,
  foto: ImageGunship,
},
{
  id: 8,
  nome: " MILLENIUM FALCON",
  preco: 999.000,
  foto: ImageMilllennium,
}
];
 class App extends React.Component {
  state= {
    produtos: products,
    query:"",
    minPrice:"",
    maxPrice:"",
    sortParameter:"",
}


updateQuery = (ev) =>{
  this.setState({
      query:ev.target.value
  })
 }
updateMinPrice = (ev) =>{
 this.setState({
     minPrice:ev.target.value
 })
}
updateMaxPrice = (ev) =>{
 this.setState({
     maxPrice:ev.target.value
 })

}
updatesortingParameter = (ev) =>{
 this.setState({

     sortParameter:ev.target.value
 })
}
updateOrder = (ev) => {
 this.setState({
    order: ev.target.value
 })
}

render(){
   

     this.state.produtos
     .filter(produto => {
         return (
          this.state.query && (produto.title.toLowerCase().includes(this.state.query.toLowerCase())||
          
          produto.description.toLowerCase().includes(this.state.query.toLowerCase()))
         )
     })
     .filter(produtos =>{
         return this.state.minPrice === "" || produtos.price >= this.state.minPrice;
     })
     .filter(produtos =>{
         return this.state.maxPrice === "" || produtos.price <= this.state.maxPrice;
     })
     .map(produtos =>{

 
         return < CardProduto key = {this.products.id} produto = {products} />
     })
  
     return (
    <div>
      <Header />
        <StyledContainer>
          <AppContainer>              
               <Filtro
      query={this.state.query}
         updateQuery={this.updateQuery}
         updateMinPrice={this.updateMinPrice}
         updateMaxPrice={this.updateMaxPrice}
         updateSortingParameter={this.updateSortingParameter}
         updateOrder={this.updateOrder}
         minPrice={this.state.minPrice}
         maxPrice={this.state.maxPrice}
         sortingParameter={this.state.sortingParameter}
         order={this.state.order} 
         />
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
           <Footer/>
    </div>
    );
  }
}

export default App;
