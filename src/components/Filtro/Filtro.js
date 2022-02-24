import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
    border: 3px solid #1a1e2c;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding: 20px;
    height:50vh;
    width: 40vh;
    border-radius: 10px;
`;
const DivLabel = styled.label`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;    
    margin-bottom:50px;
    color: #1a1e2c;
`;

const Title = styled.h3`
    color: #1a1e2c;
`
const InputContainer = styled.input`
    border-radius: 10px;
    border: 2px solid #1a1e2c;
    padding: 6px 6px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #1a1e2c;
    background-color:white;
    color: #1a1e2c;
    width: 30vh;
`
    
export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <Border>
                    <Title>Filtros de produtos</Title>
                    <DivLabel>
                        <InputContainer 
                            placeholder="Valor Mínimo"
                            type="number" 
                            min="0"
                            value={this.props.minFilter}
                            onChange={this.props.onChangeMinFilter}
                            >                                
                            </InputContainer>
                    </DivLabel>
                    <DivLabel>
                        <InputContainer
                            placeholder="Valor Máximo"
                            type="number"
                            min="0"
                            value={this.props.maxFilter}
                            onChange={this.props.onChangeMaxFilter}                            
                            ></InputContainer>
                    </DivLabel>
                    <DivLabel>
                        <InputContainer
                            placeholder="Buscar Nave" 
                            type="text"
                            value={this.props.nameFilter}
                            onChange={this.props.onChangeTitleFilter}                                               
                            ></InputContainer>
                    </DivLabel>                                        
                </Border>                
            </div>
        );
    }
}

