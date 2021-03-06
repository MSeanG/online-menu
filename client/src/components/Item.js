import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ItemStyles = styled.div`

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .header {
    width: 100%;
    background: rgba(0,0,0,0.125);
  }
  h1 {
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:3em;
    text-decoration:none;
    text-transform: uppercase;
    text-shadow: 0 0 32px black;
    height:200px;
    margin:0;
    padding:0;
    font-weight: bold;

  }
`;

class Item extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      category: {},
      items: [],
      categories: []
    }
  }

  componentWillMount() {
    this._fetchItem()
    const itemId = this.props.match.params.id;
  }

  _fetchItem = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/items/${id}`)
    this.setState({
      category: res.data.category,
      items: res.data.items
    })
  }

  _fetchCategories = async (categoryId) => {
    try {
      const response = await axios.get(`/api/categories/${categoryId}`)
      await this.setState({category: response.data.category});
      return response.data;
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  }

  render(){
    if (this.state.error){
      return <h1>{this.state.error.message}</h1>
    }
      return (
        <ItemStyles>
          <h1 className="header">{this.state.category.name}</h1>
          {this.state.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}

        </ItemStyles>
      )
  }
}

export default Item;