import React, { Component } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import styled from 'styled-components';

const CategoryListStyles = styled.div`
  margin: 20px 5%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

class CategoryList extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      categories: []
    }
  }

  componentWillMount(){
    this._fetchCategories();
  }

  _fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      const categories = response.data;
      this.setState({categories});
    }
    catch (err) {
      this.setState({error: err});
    }
    
  }

  render() {
    if (this.state.error){
      return <h1>{this.state.error.message}</h1>
    }
    return (
      <CategoryListStyles>
        {this.state.categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </CategoryListStyles>
    );
  }
}

export default CategoryList;