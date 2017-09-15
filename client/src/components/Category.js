import React, { Component } from 'react';
import axios from 'axios';
import CategoryHeader from './CategoryHeader';
import ItemCard from './ItemCard';
import styled from 'styled-components'

const CategoryStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .header {
    width: 100%;
  }
`;

class Category extends Component {
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
    this._fetchCategoryAndItems()
    const categoryId = this.props.match.params.id;
    this._fetchCategories(categoryId)
  }

  _fetchCategoryAndItems = async () => {
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/categories/${id}`)
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
        <CategoryStyles>
          <h1 className="header">{this.state.category.name}</h1>
          {this.state.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
          {/* <img src={this.state.category.image} /> */}
          {/* <h1>{this.state.category.name}</h1> */}
          {/* <h4>Nationality: {this.state.artist.nationality}</h4> */}
          {/* <h3>Items</h3> */}
          {/* {this.state.items.map(item => ( */}
            {/* <div key={item.id}> */}
              {/* <p>Title: {item.title}</p> */}
              {/* <p>Album: {song.album}</p> */}
              {/* <audio controls src={song.preview_url}></audio> */}
            {/* </div> */}
          {/* ))} */}
        </CategoryStyles>
      )
  }
}

export default Category;