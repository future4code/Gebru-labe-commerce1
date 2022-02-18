import React from 'react';
import styled from 'styled-components';

 const ContainerFooter = styled.footer`
    display:flex;
    width:100%;
    height:60px;   
    background-color: #1a1e2c;
    font-family: monospace;
    color: white;
    font-size: 15px;
`
 export default class Footer extends React.Component {

render () {

    return (

        <ContainerFooter>
            <p> Site feito por My, Cami e Kakau </p>
        </ContainerFooter>
    )
}

}
