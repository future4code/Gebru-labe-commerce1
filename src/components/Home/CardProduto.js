import React from 'react';
import styled from 'styled-components';

const MediaBox = styled.div `
    display: flex;
    flex-direction: column;
    columns: 2fr;
    border: 4px solid #BA55D3;
    border-radius: 5px;
    height: 230px;
    width: 120px;
    margin-bottom: 25px;
`
const AppToCard = styled.button`
    align-self: center;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #BA55D3;
    border-color: transparent transparent #fff transparent;
    color: white;
    border-radius: 10px;
`
const Title = styled.div`
    text-align: center;
    background-color: #BA55D3;
    color: white;

`
const Cost = styled.div`
    text-align: center;
    
`
const ImgContainer = styled.img`
 max-width: 100%;
 max-height: 100%;
 height: 200px;
 width: 200px;
 align-items:center;
`
const ContainerDiv = styled.div`
`

export class CardProduto extends React.Component {

    
     

    render(){
        const product = this.props.product
        return (<ContainerDiv>
                <MediaBox>
                    <ImgContainer src={product.foto} alt={product.nome} width="170" height="200"/>
                    <Title><b><i>{product.nome}</i></b></Title>
                    <Cost><b>R$ {product.preco},00</b></Cost>
                    <AppToCard onClick={() => this.props.addProduct(product)}>Adicionar ao carrinho</AppToCard>
                </MediaBox>
                <p>{this.state.quantidade}</p>
            </ContainerDiv>
        )}
}

