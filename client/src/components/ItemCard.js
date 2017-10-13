import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ItemStyles = styled.div`
  border: white solid 8px;
  box-shadow: 0px 0px 5px rgba(0,0,0,1);
  border-radius: 3px;
  background: rgba(255,255,255,1);

  margin: 20px 0; 
  display: flex;
  flex-wrap: wrap;
  @media (max-width:616px){
    max-width: 300px;
  }
  .title{
    height:300px;
    width:300px;

    background: rgba(0,0,0,0.25);
    margin:0;
    padding:0;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:1.25em;

    text-shadow: 0 0 16px black;
  }
  .body {
    height:292px;
    width:300px;
    margin-top:8px;
    margin-right:8px;
    margin-left:16px;
    background: white;
  }
  img {
    width: 100%;
    max-height: 300px;
  }
  h3{
    padding: 5px 0;
    width: 100%;
    text-align: center;
  }
  p{
    font-size: 1em;
    line-height: 1.5em;
  }
`;

const CategoryCard = (props) => {
  const item = props.item;
  return (
    <ItemStyles>
      <div className="title">

        <img src={item.image} alt={item.name} />
        
      </div>
      <div className="body">
        <h3>{item.title}</h3>
        <div><p>{item.description}</p></div>
        <div>{item.price}</div>
        {/* <div>
          <button>Order Online</button>
        </div> */}
      </div>
      
    </ItemStyles>
  );
};

export default CategoryCard;