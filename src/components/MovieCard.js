import React from 'react';

const MovieCard = ({ title, genre, year, cast, rating, uuid }) => {
  return (
    <div key={uuid} className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{title}</h3>
      </div>
      <div className="panel-body">
        <p><span className="strong">Genre:</span> {genre}</p>
        <p><span className="strong">Year:</span> {year}</p>
        <p><span className="strong">Cast:</span> {cast}</p>
        <p><span className="strong">Rating:</span> {rating}</p>
        <button className="btn btn-primary pull-left">Edit</button>
        <button className="btn btn-danger pull-right">Delete</button>
      </div>
    </div>
  );
};

export default MovieCard;
