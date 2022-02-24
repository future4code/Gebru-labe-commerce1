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
    border: 4px solid #1a1e2c;
    border-radius: 5px;
    background-color: #1a1e2c;
    color: white;
    border-radius: 10px;
    height: 40px;
    width: 130px;
    margin-bottom: 25px;
    font-family: monospace;
    font-size: large;
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
 height: 150px;
 width: 170px;
 align-items:center;
`
const ContainerDiv = styled.div`
`

export class CardProduto extends React.Component {

    render(){
        const product = this.props.product
        return <ContainerDiv>
                <MediaBox>
                    <ImgContainer src={product.image} alt={product.title} width="170" height="200"/>
                    <Title><b><i>{product.title}</i></b></Title>
                    <Cost><b>R${product.cost},00</b></Cost>
                    <AppToCard onClick={() => this.props.onAddProductToCart(product.id)}>
                        COMPRAR
                    </AppToCard>
                </MediaBox>
            </ContainerDiv>
    }
}