import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CategoryStyles = styled.div`
  border: white solid 16px;
  box-shadow: 0 1px 1px 2px rgba(0,0,0,0.125);
  border-radius: 3px;
  background: rgba(0,0,0,0.025);
  width: 600px;
  min-width: 300px;
  margin: 20px 0; 
  
  img {
    width: 100%;
    max-height: 300px;
  }
  h3{
    padding: 5px 0;
  }
`;

const CategoryCard = (props) => {
  const category = props.category;
  return (
    <CategoryStyles>
      <Link to={`/category/${category.id}`}>
        {/* <img src={category.image} alt={category.name} /> */}
        <h3>{category.name}</h3>
      </Link>
    </CategoryStyles>
  );
};

export default CategoryCard;