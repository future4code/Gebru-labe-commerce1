import React from 'react'
import styled from 'styled-components'


const StyledCarrinho = styled.nav`
    width: 50%;
    height: 70vh;
    margin: 15px 50px;
    border: double #a8bd9b;

`;



class Carrinho extends React.Component {
    
  
    
    render() {
      
        return (
          <StyledCarrinho>
             <p>Carrinho</p>
             <p>Valor total:</p>
          </StyledCarrinho>
        )
      }
}
  
  export default Carrinho;