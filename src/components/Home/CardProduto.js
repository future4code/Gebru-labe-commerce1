import React from 'react';
import styled from 'styled-components';

const MediaBox = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid #1a1e2c;
    border-radius: 10px;
`
const AppToCard = styled.button`
    align-self: center;
    margin-top: 8px;
    columns: 2fr;
    border: 4px solid #1a1e2c;
    border-radius: 5px;
    background-color: #1a1e2c;
    color: white;
    border-radius: 10px;
    height: 50px;
    width: 120px;
    margin-bottom: 25px;
    font-family: monospace;
`
const Title = styled.div`
    font-family: monospace;
text-align: center;
    background-color: #1a1e2c;
    color: white;

`
const Cost = styled.div`
    text-align: center;
    font-family: monospace;
    color: #1a1e2c;
    
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

export default class CardProduto extends React.Component {

    
     

    render(){
        const product = this.props.product
        return (<ContainerDiv>
                <MediaBox>
                    <ImgContainer src={product.foto} alt={product.nome} width="170" height="200"/>
                    <Title><b><i>{product.nome}</i></b></Title>
                    <Cost><b>R$ {product.preco},00</b></Cost>
                    <AppToCard>Adicionar ao carrinho</AppToCard>
                </MediaBox>
                <p></p>
            </ContainerDiv>
        )}
}
