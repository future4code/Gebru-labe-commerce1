import React from 'react';
import styled from 'styled-components';

 const ContainerFooter = styled.footer`
    display:flex;
    width:100%;
    height:40px;   
    background-color: #1a1e2c;
    font-family: monospace;
    color: white;
    font-size: 15px;
    justify-content: space-around;
    text-align: center;
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
    padding-left: 17px;
`
 export default class Footer extends React.Component {

render () {

    return (
        <ContainerFooter>
        Site desenvolvido com o &#10084; por Camis, Kakau e Mileny!
        </ContainerFooter>
    );}
 }
