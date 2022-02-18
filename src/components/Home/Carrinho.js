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

    const itensDoCarrinho =
      this.props.carrinho &&
      this.props.carrinho.map((item) => {
        return (
          <Itens
            key={item.id}
            quantidade={item.quantidade}
            nome={item.name}
            onClick={() => this.props.removerItemDoCarrinho(item)}
          />
        );
      });

    
    return (
      <StyledCarrinho>
        <p>Carrinho</p>
        <p>{itensDoCarrinho} </p>
        <p>Valor total: R$ {this.props.valorTotal},00</p>
      </StyledCarrinho>
    )
  }
}
  
  export default Carrinho;