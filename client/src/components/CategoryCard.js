import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const CategoryCard = (props) => {
  const category = props.category;

  const CategoryStyles = styled.div`
  border: white solid 8px;
  box-shadow: 0px 0px 5px rgba(0,0,0,1);
  border-radius: 3px;
  background: rgba(0,0,0,0.25);
  height:200px;
  width: 600px;
  min-width: 300px;
  margin: 20px 0; 
  position: relative;
  overflow :hidden;
  
  a{
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:1.5em;
    text-decoration:none;
    text-transform: uppercase;
    text-shadow: 0 0 16px black;
  }
  img {
    max-height: 300px;
    position: absolute;
  }
  h3{
    width:100%;
    height:100%;
    z-index:10;
    background: rgba(0,0,0,0.25);
    line-height:200px;
    text-align:center;
  }
`;
  return (
    <CategoryStyles>
      <Link to={`/category/${category.id}`}>
        <img src={category.image} alt={category.name} />
        <h3>{category.name}</h3>
      </Link>
    </CategoryStyles>
  );
};

export default CategoryCard;