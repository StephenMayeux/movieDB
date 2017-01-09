import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lockr from 'lockr';
import shortid from 'shortid';

import * as actions from '../actions';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genre: '',
      year: '',
      cast: '',
      rating: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title, genre, year, cast, rating } = this.state;
    const uuid = shortid.generate();
    this.props.saveMovie({ title, genre, year, cast, rating, uuid });
    this.setState({
      title: '',
      genre: '',
      year: '',
      cast: '',
      rating: ''
    })
  }

  render() {
    const { title, genre, year, cast, rating } = this.state;
    return (
      <div className="col-md-4">
        <h1>Enter New Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              value={title}
              onChange={this.handleChange}
              name="title"
              className="form-control"
              type="text"
              placeholder="Pulp Fiction"
            />
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select
              value={genre}
              onChange={this.handleChange}
              name="genre"
              className="form-control"
            >
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Romance">Romance</option>
              <option value="Horror">Horror</option>
              <option value="Drama">Drama</option>
              <option value="Documentary">Documentary</option>
            </select>
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              value={year}
              onChange={this.handleChange}
              name="year"
              className="form-control"
              type="text"
              placeholder="1994"
            />
          </div>
          <div className="form-group">
            <label>Cast</label>
            <input
              value={cast}
              onChange={this.handleChange}
              name="cast"
              className="form-control"
              type="text"
              placeholder="John Travolta, Samuel L Jackson"
            />
          </div>
          <div className="form-group">
            <label>Rating</label>
            <select
              value={rating}
              onChange={this.handleChange}
              name="rating"
              className="form-control"
            >
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Enter Movie
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(Create);
