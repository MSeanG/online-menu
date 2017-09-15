import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CategoryHeaderStyles = styled.div`
  width: 300px;
  min-width: 300px;
  margin: 20px 0; 
  box-shadow: 1px 1px 5px black;
  img {
    width: 100%;
    max-height: 300px;
  }
  h3{
    padding: 5px 0;
  }
`;

const CategoryHeader = (props) => {
  const category = props.category;
  return (
    <CategoryHeaderStyles>
      {/* <img src={category.image} alt={category.name} /> */}
      <h3>{category.name}</h3>
    </CategoryHeaderStyles>
  );
};

export default CategoryHeader;