import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import * as actions from '../actions';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    const { title, genre, year, cast, rating } = props;
    this.state = {
      title: title,
      genre: genre,
      year: year,
      cast: cast,
      rating: rating,
      showEdit: false,
      showDelete: false
    };

    this.showEdit = this.showEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title, genre, year, cast, rating } = this.state;
    const { uuid } = this.props;
    this.props.editMovie({ uuid, title, genre, year, cast, rating });
    this.hideEdit();
  }

  handleDelete() {
    const { uuid } = this.props;
    this.props.deleteMovie(uuid);
    this.hideDelete();
  }

  showEdit() {
    this.setState({ showEdit: true });
  }

  hideEdit() {
    this.setState({ showEdit: false });
  }

  showDelete() {
    this.setState({ showDelete: true });
  }

  hideDelete() {
    this.setState({ showDelete: false });
  }

  render() {
    const { title, genre, year, cast, rating, uuid } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          <p><span className="strong">Genre:</span> {genre}</p>
          <p><span className="strong">Year:</span> {year}</p>
          <p><span className="strong">Cast:</span> {cast}</p>
          <p><span className="strong">Rating:</span> {rating}</p>
          <button
            onClick={this.showEdit}
            className="btn btn-primary pull-left">
            Edit
          </button>
          <button
            onClick={this.showDelete}
            className="btn btn-danger pull-right">
            Delete
          </button>
        </div>

        <Modal show={this.state.showDelete} onHide={this.hideDelete}>
          <Modal.Header closeButton>
            {`Delete ${title}?`}
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete this movie? This action is irreversible!</p>
            <button onClick={this.handleDelete} className="btn btn-danger btn-block">DELETE</button>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showEdit} onHide={this.hideEdit}>
          <Modal.Header closeButton>
            <Modal.Title>{`Edit ${title} Details`}</Modal.Title>
            <Modal.Body>
              <div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      value={this.state.title}
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
                      value={this.state.genre}
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
                      value={this.state.year}
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
                      value={this.state.cast}
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
                      value={this.state.rating}
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
                    Save Changes
                  </button>
                </form>
              </div>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default connect(null, actions)(MovieCard);
