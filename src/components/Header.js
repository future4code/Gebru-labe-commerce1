import React from 'react';
import styled from 'styled-components';
import Logo from '../imgsHeader/3902021.png';
import Lupa from '../imgsHeader/lupa.png';
import Login from '../imgsHeader/iconelogin.png';

const StyledHeader = styled.header`
    height: 20vh;
    background-color: #1a1e2c;
    display: flex;
    align-items: center;

`;

const StyledLogo = styled.img`
    width: 5vw;
    margin: 35px 10px 35px 45px;

`;

const StyledNomeLoja = styled.h2`
    font-family: monospace;
    background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    
`;

const StyledInput = styled.input`
    width:500px;
    height: 40px;
    border-radius: 10px;
    font-size: 15px;
    text-align: center;
    margin-left: 100px;
`;

const StyledButtonSearch = styled.button`
    width: 30px;
    height: 20%;
    background-color: transparent;
    border: 0;
    margin-left: -40px;
`;

const StyledLupa = styled.img`
    width: 30px;
    
`;


const StyledButtonLogin = styled.button`
    width: 70px;
    height: 50%;
    background-color: transparent;
    border: 0;
    margin-left: 50px;
`;

const StyledLogin = styled.img`
    width: 70px;
    padding: 0;
    
`;


class Header extends React.Component {

    render () {

        return (
            <StyledHeader>
                <StyledLogo src= {Logo} alt="Logo da SpaceBenu" />
                <StyledNomeLoja>SpaceBenu</StyledNomeLoja>
                <StyledInput placeholder='O que você tá procurando?'/>
                <StyledButtonSearch type='button'><StyledLupa src={Lupa} /></StyledButtonSearch>
                <StyledButtonLogin type='button'> <StyledLogin src={Login} /> </StyledButtonLogin>
            </StyledHeader>

        )  
    }
}

export default Header;