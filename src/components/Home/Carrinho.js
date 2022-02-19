import React from 'react'
import styled from 'styled-components'


const StyledCarrinho = styled.nav`
    width: 30%;
    height: 70vh;
    margin: 15px 50px;
    border: 2px solid #1a1e2c;
    border-radius: 10px;
    background-color: white;
    

`;



class Carrinho extends React.Component {

  getTotalValue = () => {
    let totalValue = 0
    for(let product of this.props.products) {
      totalValue += product.preco * product.quantity    
    }
    return totalValue
}
    
  render() {

    
    return (
      <StyledCarrinho>
        <p>Carrinho</p>
        {this.props.products.map(item => (
          <div>
            <p>{item.quantity}</p>
            <p>{item.nome}</p>
            <button onClick={()=>this.props.onRemoveProductFromCart(item.id)}> - </button>
          </div>
        ))
        }
          <div>Valor total: R$ {this.getTotalValue()},00 </div>
      </StyledCarrinho>
    )
  }
}
  
  export default Carrinho;