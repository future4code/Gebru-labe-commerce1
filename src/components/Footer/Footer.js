import React from 'react';
import styled from 'styled-components';

 const ContainerFooter = styled.footer`

    display:flex;
   width:100%;
   height:60px;   
   background:#6cf;

   
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
