import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const CategoryStyles = styled.div`
  img {
    max-height: 400px;
    width: 100%;
  }
`;

class Category extends Component {
  constructor() {
    super();
    this.state = {
      category: {},
      items: [],
    }
  }

  componentWillMount() {
    this._fetchCategoryAndItems()
  }

  _fetchCategoryAndItems = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/categories/${id}`)
    this.setState({
      category: res.data.category,
      items: res.data.items
    })
  } 

  render(){
    return (
      <CategoryStyles>
        {/* <img src={this.state.category.image} /> */}
        <h1>{this.state.category.name}</h1>
        {/* <h4>Nationality: {this.state.artist.nationality}</h4> */}
        <h3>Items</h3>
        {this.state.items.map(item => (
          <div key={item.id}>
            <p>Title: {item.title}</p>
            {/* <p>Album: {song.album}</p> */}
            {/* <audio controls src={song.preview_url}></audio> */}
          </div>
        ))}
      </CategoryStyles>
    )
  }
}

export default Category;