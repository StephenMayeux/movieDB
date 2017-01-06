import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import MovieCard from './MovieCard';
import Search from './Search';

class MovieList extends Component {
  renderList() {
    const { movies } = this.props;
    if (movies.length) {
      return _.map(movies, movie => {
        return <MovieCard key={movie.uuid} { ...movie } />;
      });
    }
    return <p>No movies yet!</p>;
  }

  render() {
    return (
      <div className="col-md-7 col-md-offset-1">
        <h1>Movies List</h1>
        <Search />
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies };
};

export default connect(mapStateToProps, actions)(MovieList);
