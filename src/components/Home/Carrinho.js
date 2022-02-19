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
    
  render() {

    
    return (
      <StyledCarrinho>
        <p>Carrinho</p>
        <p></p>
        <p>Valor total: R$,00</p>
      </StyledCarrinho>
    )
  }
}
  
  export default Carrinho;