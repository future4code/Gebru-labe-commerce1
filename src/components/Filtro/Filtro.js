import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
display:flex;
margin-left:0;
border: 2px solid #1a1e2c;
flex-direction: column;
width:20vw;
height: fit-content;
border-radius: 10px;
gap:10px;
padding:3px;
`

export default function Filters(props) {
  const onchangeQuery = (ev) => {
      props.updateQuery(ev)
   }
   return <FiltersContainer>
      <input
         placeholder="Pesquisa"
         value={props.query}
         onChange={onchangeQuery}
      />

      <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={props.updateMinPrice}
      />

      <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={props.updateMaxPrice}
      />

      <span>
         <label for="sort">Ordenação: </label>
         <select
            name="sort"
            value={props.sortingParameter}
            onChange={props.updateSortingParameter}
         >
            <option value="name">Nome</option>
            <option value="min">Preço Mínimo</option>
            <option value="max">Preço Máximo</option>
         </select>
      </span>

   </FiltersContainer>

}

