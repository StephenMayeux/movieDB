import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      term: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.props.filterMovies(this.state.term);
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          name="term"
          onChange={this.handleChange.bind(this)}
          className="form-control"
          placeholder="Search for titles"
          style={{ marginBottom: 20 }}
        />
      </div>
    );
  }
}

export default connect(null, actions)(Search);
