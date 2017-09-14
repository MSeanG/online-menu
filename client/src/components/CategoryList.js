import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
      const res = await axios.get('/api/categories');
      await this.setState({Categories: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
    
  }

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
        <h1>Categories</h1>
        {this.state.categories.map(category => (
          <div>
            <Link to={`/category/${category.id}`} >{category.name}</Link> 
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryList;