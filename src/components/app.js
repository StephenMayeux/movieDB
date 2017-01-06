import React, { Component } from 'react';

import Create from './Create';
import MovieList from './MovieList';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <Create />
        <MovieList />
      </div>
    );
  }
}
