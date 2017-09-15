import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemStyles = styled.div`
  width: 600px;
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

const CategoryCard = (props) => {
  const item = props.item;
  return (
    <ItemStyles>

        {/* <img src={category.image} alt={category.name} /> */}
        <h3>{item.title}</h3>

    </ItemStyles>
  );
};

export default CategoryCard;